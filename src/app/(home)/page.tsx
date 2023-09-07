import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#09090b] h-screen ">
      <div className="container left h-full">
        <div className="py-4">
          <header className="items-center text-sm  flex border bg-black border-gray-500 px-[20px] py-3 font-semibold  rounded-3xl text-white md:max-w-[700px] md:mx-auto ">
            <Link href={"/"} className="mr-auto">
              headless
            </Link>
            <div className="flex gap-4">
              <Link href={"/"} className="ml-auto text-sm">
                SignUP
              </Link>
              <Link
                href={"/"}
                className=" text-white text-sm font-semibold bg-indigo-700 rounded-full px-3 py-[1px]"
              >
                Login
              </Link>
            </div>
          </header>
        </div>
        <section className="text-center py-40">
          <h1 className="gradient-text font-bold max-w-[60%] mx-auto text-center w-fit  ">
            Content Mangement System <br /> For Your{" "}
            <span className="bg-indigo-700 gradient-text"> Website</span>
          </h1>
          <p className="text-white">this is a paragraph</p>
          <Link
            href={"/"}
            className="bg-indigo-700 text-white font-semibold  py-2 px-4 active:bg-red-700 m-4 rounded-full mt-8 block w-fit mx-auto"
          >
            GET STARTED
          </Link>
        </section>
      </div>
    </main>
  );
}

// background-image: linear-gradient(0deg, var(rgb(185, 187, 193), rgb(185, 187, 193)) 0%, var(, rgb(255, 255, 255)) 100%);
// background-image: linear-gradient(0deg, rgb(185, 187, 193), 0%, var(, rgb(255, 255, 255)) 100%);
