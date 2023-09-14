"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// import "@uploadthing/react/styles.css";

import { UploadButton } from "@/utils/uploadthing";

export default function AddItem() {
  const [modalOpen, setModalOpen] = useState<boolean>();
  const [img, setImg] = useState<string>();
  console.log(img);
  return (
    <div className="md:ml-auto">
      <Button
        className=" inline-block md:ml-auto mt-4 md:mt-4 font-semibold "
        onClick={() => setModalOpen(true)}
      >
        Add
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
              <Label className="">Name</Label>
              <Input required />
              <Label className="">Price</Label>
              <Input required />
              <Label className="">Image</Label>
              <div className="  ">
                <img
                  src={
                    img
                      ? img
                      : "https://audiophile-ecom-steel.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fmaterial-outlined%2F24%2Fadd-image.png&w=384&q=75"
                  }
                  className="border w-[20%] mx-auto"
                  alt="asdf"
                />
                <UploadButton
                  endpoint="imageUploader"
                  className=" border w-[40%] text-sm  my-4 mx-auto h-12 p-2 rounded-md   bg-black "
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    if (res) {
                      setImg(res[0]?.url);
                    }
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <Button type="submit" className="my-4">
                {" "}
                Add
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
