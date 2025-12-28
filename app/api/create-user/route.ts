import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
console.log("hello");

export const POST = async (req: Request) => {
  try {
    const { nickname, password } = await req.json();
    const hashedPass = await bcrypt.hash(password, 10);
    console.log(hashedPass);
    const newUser = await prisma.user.create({
      data: {
        nickname,
      },
    });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in .env");
    }

    const token = jwt.sign(
      {
        userId: newUser.id,
        nickname: newUser.nickname,
      },
      secret,
      { expiresIn: "24h" }
    );

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          nickname: newUser.nickname,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup Error:", error);

    return NextResponse.json(
      { error: "Хэрэглэгч үүсгэхэд алдаа гарлаа." },
      { status: 500 }
    );
  }
};
