"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function SignUpForm() {
  const [error, setError] = useState<string>("");
  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => setError(res));
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full  flex justify-center flex-col mt-[10%]"
    >
      <h1 className="text-white font-bold text-2xl text-center">Sign Up</h1>
      <p className="   h-6 text-center text-red-500"> {error ? error : ""}</p>
      <Label className=" text-white text-lg">Email</Label>
      <Input
        placeholder="example@gmail.com"
        required
        name="email"
        type="email"
      />
      <Label className=" text-white text-lg">password</Label>
      <Input
        placeholder="secure password"
        required
        name="password"
        type="password"
      />
      <Button className=" text-black bg-white my-4 hover:bg-slate-200">
        sign up
      </Button>
      <p className="text-white w-fit mx-auto">
        have an account{" "}
        <Link className="underline" href={"/signin"}>
          {" "}
          Sign in
        </Link>
      </p>
    </form>
  );
}
