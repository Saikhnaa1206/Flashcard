"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Page = () => {
  const requestToSignUp = async () => {
    const response = await fetch("/api/create-user");
    console.log(response);
    const data = await response.json();
    console.log(data);
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
