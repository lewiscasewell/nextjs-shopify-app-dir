import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOCK COUNT",
  description: "Buy socks. Get socks. Socks.",
};

const NavBar = () => {
  return (
    <nav className="p-4 flex absolute top-0 justify-between w-full items-center">
      <Link href="/">
        <h1 className="font-bold text-2xl border-dashed border-2 border-white p-1">
          SOCK-COUNT
        </h1>
      </Link>

      <div className="flex gap-8 md:text-black font-bold z-10">
        <Link href="/products">PRODUCTS</Link>
        <Link href="/cart">
          <ShoppingBagIcon className="h-5 w-5" />
        </Link>
      </div>
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
