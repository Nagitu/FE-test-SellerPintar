import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app", "data", "json", "users.json");

type NewUser = {
  id: string;
  username: string;
  role: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, role } = body;

  if (!username || !role) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Read existing data
  const users: NewUser[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log(users);

  // Add new user
  const newUser: NewUser = {
    id: Date.now().toString(), // generate ID
    username,
    role,
  };

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return NextResponse.json(newUser, { status: 201 });
}

export async function GET() {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const users: NewUser[] = JSON.parse(fileData);

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Failed to read users:", error);
    return NextResponse.json(
      { error: "Failed to load users" },
      { status: 500 }
    );
  }
}
