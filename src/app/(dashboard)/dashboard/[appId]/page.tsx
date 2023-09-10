import React from "react";

export default function page() {
  const type = "ecommerce";
  return (
    <main className="container ">
      <h1
        className="scroll-m-20  md:text-4xl text-2xl font-bold tracking-tight f
        "
      >
        {type === "ecommerce" ? "Products" : "Blogs"}
      </h1>
    </main>
  );
}
