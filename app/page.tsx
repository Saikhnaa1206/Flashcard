"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";
const Page = () => {
  const [flip, setFlip] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div>
      {" "}
      <div className="w-fit fixed top-6 right-6 flex gap-3">
        <Button>Log in</Button>
        <Button
          onClick={() => {
            router.replace(`/sign-up`);
          }}
        >
          Sign up
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <Card className="max-w-sm w-full p-6">
          {flip == false ? (
            <CardContent onClick={() => setFlip(true)}>Apple</CardContent>
          ) : (
            <CardDescription onClick={() => setFlip(false)}>
              {" "}
              <div>
                "An apple is a round, edible fruit produced by an apple tree
                (Malus domestica). They are cultivated worldwide and are known
                for their sweet or tart taste and crunchy texture."
              </div>
              <div> Алим</div>
            </CardDescription>
          )}
        </Card>
      </div>
      <div className="fixed top-6 left-6">Create your own flashcards!</div>
    </div>
  );
};
export default Page;
