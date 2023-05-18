"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const ProductsLink = () => {
  const pathname = usePathname();

  const color = pathname === "/" ? "text-white md:text-black" : "text-black";
  return (
    <Link href="/products" className={`pt-2 ${color}`}>
      PRODUCTS
    </Link>
  );
};
