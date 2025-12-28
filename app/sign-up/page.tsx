"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Page = () => {
  const [signUp, setSignUp] = useState<boolean>(false);
  const requestToSignUp = async () => {
    const response = await fetch("@/api/create-user");
    const data = await response.json();
    console.log(data);
    setSignUp(true);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 w-[400px] h-fit">
        <Input placeholder="nickname"></Input>
        <Input placeholder="password"></Input>
        <Button onClick={() => requestToSignUp()}>SIGN UP</Button>
      </div>
    </div>
  );
};
export default Page;
