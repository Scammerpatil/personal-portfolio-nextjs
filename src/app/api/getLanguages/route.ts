import ProgrammingLanguage from "@/models/ProgrammingLanguage";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const languages = await ProgrammingLanguage.find({});
  return NextResponse.json(languages);
}
