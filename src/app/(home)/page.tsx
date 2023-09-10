import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/header";
import HomeHeader from "@/components/homeHeader";

export default function Home() {
  return (
    <main className="bg-[#09090b] h-screen">
      <div className=" left h-full">
        <div className=" w-[200px] ml-[30%] rounded-full  h-[200px] bg-[rgba(201,130,130,0.24)]  a "></div>
        <div className="w-[200px] ml-[50%] rounded-3xl  h-[200px] bg-[#37373765]   a "></div>
        <div className="w-[200px] ml-[30%] rounded-lg  h-[200px] bg-[#34303046]   a "></div>

        <div className=" absolute flex flex-col items-center backdrop-blur-xl left-0 top-0 w-screen h-screen  border-2-white">
          <div className="">
            <HomeHeader />
          </div>

          <section className="text-center py-40">
            <h1 className="gradient-text sm:text-5xl text-3xl  font-extrabold  mx-auto text-center   ">
              Content Mangement System <br /> For Your Website
            </h1>

            <p className="text-white max-w-lg mx-auto my-4">
              Treat content as data actionable and scalable across your business
              with the Sanity Composable Content Cloud.
            </p>
            <Link
              href="/"
              className="bg-white text-black font-semibold  border hover:text-white hover:bg-transparent py-2 px-4  m-4 rounded-full mt-8 block w-fit mx-auto"
            >
              GET STARTED
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

// background-image: linear-gradient(0deg, var(rgb(185, 187, 193), rgb(185, 187, 193)) 0%, var(, rgb(255, 255, 255)) 100%);
// background-image: linear-gradient(0deg, rgb(185, 187, 193), 0%, var(, rgb(255, 255, 255)) 100%);
