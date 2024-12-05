import dbConfig from "@/middleware/db.config";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

dbConfig();

export async function POST(req: NextRequest) {
  const {
    title,
    paragraph,
    tags,
    github,
    author,
    slug,
    imageURL,
    publishDate,
  } = await req.json();

  const blog = new Blog({
    title,
    paragraph,
    tags,
    github,
    author,
    slug,
    imageURL,
    publishDate,
  });
  const newBlog = await blog.save();
  if (newBlog) {
    return NextResponse.json(
      { message: "Blog added successfully" },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      { message: "An error occurred while adding the blog" },
      { status: 500 }
    );
  }
}
