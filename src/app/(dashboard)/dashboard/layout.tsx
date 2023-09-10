import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";
import Header from "@/components/header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
