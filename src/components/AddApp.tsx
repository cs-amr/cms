"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

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
          className="fixed top-0 left-0 right-0 h-screen bg-black/50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div className="border  max-w-3xl w-full">hehe</div>
        </div>
      )}
    </div>
  );
}
