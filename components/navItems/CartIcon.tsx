"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export const CartIcon = () => {
  const pathname = usePathname();

  const color = pathname === "/" ? "text-white md:text-black" : "text-black";
  return <ShoppingBagIcon className={`h-6 w-6 ${color}`} />;
};
