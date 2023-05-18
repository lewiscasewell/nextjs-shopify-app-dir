"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  const logoColor =
    pathname === "/" ? "text-white border-white" : "text-black border-black";
  const navItemsColor =
    pathname === "/" ? "text-white md:text-black" : "text-black";

  return (
    <nav className="p-4 flex absolute top-0 justify-between w-full items-center">
      <Link href="/">
        <h1
          className={`font-bold text-2xl border-dashed border-2 ${logoColor} p-1`}
        >
          SOCK-COUNT
        </h1>
      </Link>

      <div className={`flex gap-8 ${navItemsColor} font-bold z-10 px-4`}>
        <Link href="/products">PRODUCTS</Link>
        <Link href="/cart">
          <ShoppingBagIcon className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
};
