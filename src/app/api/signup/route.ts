import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../../db";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (exist) {
    return NextResponse.json("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return NextResponse.json(user, { status: 200 });
}
