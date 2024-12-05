import dbConfig from "@/middleware/db.config";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

dbConfig();

export async function GET() {
  const reviews = await Review.find();
  return NextResponse.json(reviews, { status: 200 });
}
