import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense } from "react";
import Cart from "./cart";
import { Logo } from "./navItems/Logo";
import { ProductsLink } from "./navItems/Products";

export default async function NavBar() {
  //   const navItemsColor =
  //     pathname === "/" ? "text-white md:text-black" : "text-black";

  return (
    <nav className="p-4 flex absolute top-0 justify-between w-full items-center">
      <Logo />

      <div className={`flex gap-8 items-center font-bold z-10 px-4`}>
        <ProductsLink />
        {/* <Link href="/cart">
          <ShoppingBagIcon className="h-5 w-5" />
        </Link> */}
        <Suspense fallback={<ShoppingBagIcon className="h-5 w-5" />}>
          {/* @ts-expect-error Server Component */}
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
