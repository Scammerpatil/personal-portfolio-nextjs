import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  const blogs = await Blog.findOne({ slug });
  return NextResponse.json(blogs);
}
