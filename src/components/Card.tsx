import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function ProjectCard() {
  return (
    <div className="relative">
      <Link
        className="absolute top-0 left-0 right-0 bottom-0"
        href="/dashboard/audiophile/overview"
      ></Link>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-xl">
              <Link href="/dashboard/audiophile/overview">audiophile</Link>
            </CardTitle>
            <Link href="/dashboard/audiophile/overview">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-box-arrow-up-right font-bold m-auto  "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </Link>
          </div>
          <CardDescription>
            <Link href="/">audiophile.com</Link>
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-4">
          <p className="uppercase font-semibold text-xs">blog</p>
        </CardFooter>
      </Card>
    </div>
  );
}
