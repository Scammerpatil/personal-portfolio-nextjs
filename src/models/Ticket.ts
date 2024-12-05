import { TicketInterface } from "@/types/ticket";
import mongoose, { Schema } from "mongoose";

const TicketSchema = new Schema<TicketInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: "open" },
});

const Ticket =
  mongoose.models.Ticket ||
  mongoose.model<TicketInterface>("Ticket", TicketSchema);

export default Ticket;
