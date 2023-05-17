import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOCK COUNT",
  description: "Buy socks. Get socks. Socks.",
};

const NavBar = () => {
  return (
    <nav className="p-4 flex absolute top-0">
      <Link href="/">
        <h1 className="font-bold text-2xl border-dashed border-2 border-white p-1">
          SOCK-COUNT
        </h1>
      </Link>
    </nav>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">
        <NavBar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
