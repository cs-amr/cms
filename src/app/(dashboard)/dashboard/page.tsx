import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/Card";
import AddApp from "@/components/AddApp";

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
        <AddApp />
      </div>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2">
        <ProjectCard />
      </section>
    </main>
  );
}
