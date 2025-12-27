import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId, term, definition, translation, wordListId } =
      await req.json();
    const newWord = await prisma.word.create({
      data: {
        term,
        definition,
        translation,
        wordListId,
      },
    });
    console.log();
    return NextResponse.json(newWord, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while creating the flashcard." },
      { status: 500 }
    );
  }
};
