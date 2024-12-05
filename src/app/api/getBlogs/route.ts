import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const blogs = await Blog.find();
  return NextResponse.json(blogs);
}
