import SignInForm from "@/components/SignInForm";
import HomeHeader from "@/components/homeHeader";
import "../../../app/globals.css";

export default function Page() {
  return (
    <div className="bg-black">
      <HomeHeader />
      <main className="  h-screen">
        <div className="container flex items-center justify-center">
          <SignInForm />
        </div>
      </main>
    </div>
  );
}
