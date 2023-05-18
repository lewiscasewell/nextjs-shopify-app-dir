"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
  const pathname = usePathname();

  const logoColor =
    pathname === "/" ? "text-white border-white" : "text-black border-black";

  return (
    <Link href="/" className="pt-2">
      <h1
        className={`font-bold text-2xl border-dashed border-2 ${logoColor} p-1`}
      >
        SOCK-COUNT
      </h1>
    </Link>
  );
};
