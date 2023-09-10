import Aside from "@/components/Aside";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col md:flex-row py-8 gap-8">
      <Aside /> {children}
    </div>
  );
}
