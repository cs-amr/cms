import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";

export default function HomeHeader() {
  const login = false;
  return (
    <header className="  text-sm   px-[20px] py-3 font-semibold    text-white    w-screen ">
      <div className="container h-full flex  items-center  ">
        <Link href={"/"} className="mr-auto text-xl ">
          headless
        </Link>
        <div className="flex gap-4 text-white">
          {login ? (
            <>
              <Link href={"/signup"} className="ml-auto text-sm">
                Sign up
              </Link>
              <Link
                href={"/login"}
                className="  text-sm font-semibold  rounded-full px-3 py-[1px]"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              <Link
                href={"/dashboard"}
                className=" text-sm  font-semibold h-fit my-auto rounded-full px-3 "
              >
                Dashboard
              </Link>

              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
