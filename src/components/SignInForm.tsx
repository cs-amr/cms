"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { compareSync } from "bcrypt";
import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
export default function SignInForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      setError(false);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      }).then((res) => router.push("/dashboard"));
    } catch (e) {
      setError(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full  flex justify-center flex-col mt-[10%]"
    >
      <h1 className="text-white font-bold text-2xl text-center">Sign in</h1>
      <p className="   h-6 text-center text-red-500">
        {" "}
        {error ? "enter a vaild email and password" : ""}
      </p>
      <Label className=" text-white text-lg"> Email</Label>
      <Input
        placeholder="example@gmail.com"
        type="email"
        required
        name="email"
      />
      <Label className=" text-white text-lg">password</Label>
      <Input
        placeholder="secure password"
        required
        type="password"
        name="password"
      />
      <Button className=" text-black bg-white my-4 hover:bg-slate-200">
        {loading ? (
          <svg
            aria-hidden="true"
            className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-zinc-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          "Sign in"
        )}
      </Button>
      <p className="text-white w-fit mx-auto">
        Don&apos;t have an account{" "}
        <Link className="underline" href={"/signup"}>
          {" "}
          Sign Up
        </Link>
      </p>
    </form>
  );
}
