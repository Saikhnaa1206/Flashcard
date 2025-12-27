"use client";
import React, { useState } from "react";

const cards = [
  {
    term: "To Graze",
    definition: "To eat grass or plants growing in a field.",
    translation: "Бэлчээрлэх, идэшлэх",
  },
  {
    term: "Discrimination",
    definition:
      "The ability to distinguish between different things; judgment.",
    translation: "Ялгаж салгах чадвар",
  },
  {
    term: "Terrain",
    definition: "A stretch of land and its physical features.",
    translation: "Газар нутаг, бартаа",
  },
  {
    term: "Herbicide",
    definition: "A chemical substance used to kill unwanted plants.",
    translation: "Ургамлын хор",
  },
  {
    term: "Unwanted",
    definition: "Not desired or needed.",
    translation: "Хэрэгцээгүй, хүсээгүй",
  },
];

export default function FlashcardApp() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        SAT Vocab Flashcards
      </h1>

      {/* Flashcard Container */}
      <div
        className="relative w-80 h-52 cursor-pointer perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-white border-2 border-blue-500 rounded-xl flex items-center justify-center shadow-lg backface-hidden">
            <p className="text-2xl font-semibold text-gray-800">
              {cards[index].term}
            </p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-blue-500 text-white border-2 border-blue-500 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg backface-hidden rotate-y-180">
            <p className="text-lg text-center mb-2">
              {cards[index].definition}
            </p>
            <p className="text-sm italic opacity-90 border-t pt-2 w-full text-center">
              MN: {cards[index].translation}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={prevCard}
          className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        >
          Prev
        </button>
        <button
          onClick={nextCard}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-gray-500">
        Card {index + 1} of {cards.length} (Click to flip)
      </p>

      {/* Tailwind helper styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
