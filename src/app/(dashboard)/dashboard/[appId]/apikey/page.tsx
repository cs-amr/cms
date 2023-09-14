"use client";
import ApiKey from "@/components/ApiKey";
export default function page() {
  return (
    <main className="container ">
      <h1
        className="scroll-m-20  md:text-4xl text-2xl font-bold tracking-tight f
        "
      >
        Api Key
      </h1>
      <p className="text-sm">View and manage your API keys.</p>
      <section className="mt-8">
        <div className="font-bold">Your Api Key</div>

        <ApiKey />
      </section>
    </main>
  );
}
