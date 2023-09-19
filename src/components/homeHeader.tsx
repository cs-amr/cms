import Link from "next/link";
import React from "react";

export default async function HomeHeader() {
  return (
    <header className="  text-sm   px-[20px] py-3 font-semibold    text-white    w-screen ">
      <div className="container h-full flex  items-center  ">
        <Link href={"/"} className="mr-auto text-xl ">
          headless
        </Link>
        <div className="flex gap-4 text-white">
          {!false ? (
            <>
              <Link href={"/signup"} className="ml-auto text-sm">
                Sign up
              </Link>
              <Link
                href={"/signin"}
                className="  text-sm font-semibold  rounded-full px-3 py-[1px]"
              >
                Sign in
              </Link>
            </>
          ) : (
            <>
              <Link
                href={"/signin"}
                className=" text-sm  font-semibold h-fit my-auto rounded-full px-3 "
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
