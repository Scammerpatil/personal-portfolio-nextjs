import { NextRequest, NextResponse } from "next/server";
import ResumeDetails from "@/models/ResumeDetails";
import dbConfig from "@/middleware/db.config";

dbConfig();

export async function GET(req: NextRequest) {
  const resume = await ResumeDetails.find();
  if (!resume)
    return NextResponse.json({ error: "No resume found" }, { status: 404 });
  return NextResponse.json(resume, { status: 200 });
}
