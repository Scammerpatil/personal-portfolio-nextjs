import Ticket from "@/models/Ticket";
import { NextRequest } from "next/server";
import ticketEmail from "@/middleware/ticketEmail";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  if (!name || !email || !message) {
    return { status: 400, json: { message: "Please fill all the fields" } };
  }
  const ticket = new Ticket({
    name,
    email,
    message,
  });
  const newTicket = await ticket.save();
  if (newTicket) {
    await ticketEmail(email, name, message, newTicket);
    return { status: 200, json: { message: "Ticket submitted successfully" } };
    // ticketEmail("ScammerPatil", "sauravpatil453@gmail.com", message, newTicket);
  }
  return { status: 500, json: { message: "Failed to submit ticket" } };
}
