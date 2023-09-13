import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
export default function page() {
  const type = "ecommerce";
  https: return (
    <main className="container ">
      <h1
        className="scroll-m-20  md:text-4xl text-2xl font-bold tracking-tight f items-center justify-between flex
        "
      >
        <span>{type === "ecommerce" ? "Products" : "Blogs"}</span>
        <Button>Add</Button>
      </h1>
      <section className="mt-8">
        <Table>
          <TableCaption>A list of your items.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"> </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Created</TableHead>
              <TableHead className="text-center">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="w-[100px]">
                <img
                  src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                  width={50}
                  height={50}
                  className=" rounded min-w-[50px]"
                  alt={""}
                />
              </TableCell>
              <TableCell>Headphones</TableCell>
              <TableCell>200$</TableCell>
              <TableCell className="text-center">21 Aug</TableCell>
              <TableCell className="text-center">3 Aug</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
