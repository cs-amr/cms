"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function AddApp() {
  const [modalOpen, setModalOpen] = useState<boolean>();

  return (
    <div className="md:ml-auto">
      <Button
        className=" inline-block md:ml-auto mt-4 md:mt-4 font-semibold "
        onClick={() => setModalOpen(true)}
      >
        + Create a new app
      </Button>
      {modalOpen && (
        <div
          className="backdrop-blur-sm z-10 fixed top-0 left-0 right-0 h-screen  bg-black/20 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="border  max-w-lg w-full bg-white dark:bg-zinc-950 p-4 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <form action="" className="flex flex-col gap-2">
              <Label className="">App Name</Label>
              <Input />
              <Label className="">App URL</Label>

              <Input />
              <div>
                <Label>Type</Label>
                <Select defaultValue="store">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="store">Store</SelectItem>
                    <SelectItem value="blog">Blog</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="my-4">
                {" "}
                Add Project
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
