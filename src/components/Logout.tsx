"use client";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

export default function Logout() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="relative  ">
      <Avatar className="w-8 h-8" onClick={() => setShow(!show)}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {show ? (
        <button
          className="absolute rounded right-0 top-12 hover:opacity-80 p-2 dark:bg-white bg-black text-white   w-40 dark:text-red-700"
          onClick={async () => {
            await signOut({ callbackUrl: "/" });
            setShow(false);
          }}
        >
          Log Out
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
