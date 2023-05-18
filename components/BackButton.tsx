"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="w-40 hover:-translate-x-1 transition-transform duration-100 flex items-center space-x-2 p-2"
    >
      <ChevronLeftIcon className="w-5 h-5 text-black" />
      <span className="font-medium">BACK</span>
    </button>
  );
};
