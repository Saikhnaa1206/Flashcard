import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { nickname } = await req.json();
    const newUser = await prisma.user.create({
      data: {
        nickname,
      },
    });
    console.log();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while creating the user." },
      { status: 500 }
    );
  }
};
