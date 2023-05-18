"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const ScrollToBottomButton = () => {
  return (
    <button
      onClick={scrollToBottom}
      className="md:hidden text-black absolute top-0 p-5 flex justify-center items-center w-full"
    >
      <ChevronDownIcon className="h-10 w-10" />
    </button>
  );
};
