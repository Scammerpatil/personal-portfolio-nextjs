import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, github, designation, content, star } = await req.json();
  if (!name || !email || !designation || !content || !star) {
    return NextResponse.json(
      { message: "Please fill all the fields" },
      { status: 400 }
    );
  }
  const review = new Review({
    name,
    email,
    github,
    designation,
    content,
    star,
  });
  if (github) {
    review.image = `https://avatars.githubusercontent.com/${github}`;
  }

  const newReview = await review.save();
  if (newReview) {
    return NextResponse.json(newReview, { status: 201 });
  } else {
    return NextResponse.json(
      { message: "Review not saved. Please try again" },
      { status: 400 }
    );
  }
}
