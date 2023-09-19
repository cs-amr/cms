import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { redirect } from "next/navigation";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
export default async function Header() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/signin");
  }

  return (
    <header className="  text-sm   px-[20px] py-3 font-semibold border   dark:text-white text-black   w-screen ">
      <div className="container h-full flex  items-center  ">
        <Link href={"/"} className="mr-auto text-xl ">
          headless
        </Link>
        <div className=" flex gap-4 text-black dark:text-white">
          <ModeToggle />

          <Logout />
        </div>
      </div>
    </header>
  );
}
