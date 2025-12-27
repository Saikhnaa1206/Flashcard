"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
const Page = () => {
  const [flip, setFlip] = useState<boolean>(false);
  return (
    <div>
      {" "}
      <div className="w-fit fixed top-0 right-0 flex gap-2">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </div>
      <div className="w-100 h-100 flex flex-col justify-center items-center">
        <Card className="w-[500px] h-[300px]">
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
    </div>
  );
};
export default Page;
