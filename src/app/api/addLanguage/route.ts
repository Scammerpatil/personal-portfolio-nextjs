import ProgrammingLanguage from "@/models/ProgrammingLanguage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    languageName,
    description,
    imgURL,
    levelOfExpertise,
    tag,
    uploadedAt,
  } = await req.json();

  if (!languageName || !description || !imgURL || !levelOfExpertise || !tag) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  const language = new ProgrammingLanguage({
    languageName,
    description,
    imgURL,
    levelOfExpertise,
    tag,
    uploadedAt,
  });

  try {
    const newLanguage = await language.save();
    if (!newLanguage) {
      return NextResponse.json(
        { error: "Language not added" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Language added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
