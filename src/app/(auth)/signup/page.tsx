import SignUpForm from "@/components/SignUpForm";
import HomeHeader from "@/components/homeHeader";
import "../../../app/globals.css";

export default function Page() {
  return (
    <div className="bg-black">
      <HomeHeader />
      <main className="  h-screen">
        <div className="container flex items-center justify-center">
          <SignUpForm />
        </div>
      </main>
    </div>
  );
}
