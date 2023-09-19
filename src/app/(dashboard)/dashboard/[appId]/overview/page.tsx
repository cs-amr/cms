import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddItem from "@/components/AddItem";
export default function page() {
  const type = "ecommerce";
  return (
    <main className="container ">
      <h1
        className="scroll-m-20  md:text-4xl text-2xl font-bold tracking-tight f items-center justify-between flex
        "
      >
        <span>{type === "ecommerce" ? "Products" : "Blogs"}</span>
        <AddItem />
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
              <TableHead className="w-[100px]"> </TableHead>
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
              <TableHead className="w-[100px] flex gap-2 items-center justify-center">
                <button
                  title="Delete"
                  className="mt-8 inline-block cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-trash my-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                  </svg>
                </button>{" "}
                <button className="mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square my-4 mr-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    ></path>
                  </svg>
                </button>
              </TableHead>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
