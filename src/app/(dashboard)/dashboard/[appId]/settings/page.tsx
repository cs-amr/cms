import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function page() {
  return (
    <main className="w-full">
      <h1
        className="scroll-m-20  md:text-4xl text-2xl font-bold tracking-tight f items-center justify-between flex
        "
      >
        Settings
      </h1>
      <section className="w-full">
        <div className="my-8 border rounded-md p-4 w-full md:max-w-4xl">
          <h3>General</h3>
          <p className="text-xs text-gray-500">
            Adjust your applications name and URL
          </p>
          <form className="md:max-w-[300px]">
            <Label className=" ">App Name </Label>
            <Input className="my-2" />
            <Label className="mb-2 mt-4">App URL</Label>
            <Input className="my-2" />
            <Button>Save</Button>
          </form>
        </div>
        <div className="my-8 border rounded-md p-4 w-full md:max-w-4xl">
          <h3>Danger Zone</h3>
          <p className="text-xs text-gray-500">
            The following actions are destructive and cannot be reversed.
          </p>
          <Button variant={"destructive"} className="my-4">
            Delete App
          </Button>
        </div>
      </section>
    </main>
  );
}
