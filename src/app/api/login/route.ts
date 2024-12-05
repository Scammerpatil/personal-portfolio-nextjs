import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { identifier, password } = await req.json();

  const users = [
    {
      identifier: "saurav",
      password: "saurav",
      isAdmin: true,
      github: "scammerpatil",
      designation: "Software Engineer",
    },
    {
      identifier: "mitesh",
      password: "mitesh",
      github: "Mitesh-2004",
      designation: "Software Engineer",
    },
    {
      identifier: "mahi_bhai",
      password: "mahi_bhai",
      github: "mahi-bhai",
      designation: "Software Engineer",
    },
    {
      identifier: "shubham",
      password: "shubham",
      github: "shubham-2004",
      designation: "Software Engineer",
    },
    {
      identifier: "sanika",
      password: "sanika",
      github: "sanika-2004",
      designation: "Software Engineer",
    },
    {
      identifier: "vivek",
      password: "chiku",
      github: "sanket-2004",
      designation: "Software Engineer",
    },
  ];
  const user = users.find(
    (user) => user.identifier === identifier && user.password === password
  );

  if (user) {
    const response = NextResponse.json({ message: "Login successful", user });

    response.cookies.set("user", JSON.stringify(user), {
      maxAge: 60 * 60 * 24,
      httpOnly: true,
    });

    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
