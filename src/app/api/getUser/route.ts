import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  var user = req.cookies.get("user")?.value;
  if (!user) {
    user = "";
    return NextResponse.json({ message: "User not found" }, { status: 200 });
  }
  const userData = JSON.parse(user);
  return NextResponse.json(userData, { status: 200 });
}
