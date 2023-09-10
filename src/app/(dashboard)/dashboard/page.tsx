import { Button } from "@/components/ui/button";
import React from "react";
import ProjectCard from "@/components/Card";

export default function page() {
  return (
    <main className="container">
      <div className="flex items-center md:flex-row flex-col  my-8">
        <h1
          className="scroll-m-20  md:text-4xl text-2xl font-bold tracking-tight f
        "
        >
          Your Apps{" "}
        </h1>
        <Button className=" inline-block md:ml-auto mt-4 md:mt-4 font-semibold ">
          + Create a new app
        </Button>
      </div>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2">
        <ProjectCard />
      </section>
    </main>
  );
}
