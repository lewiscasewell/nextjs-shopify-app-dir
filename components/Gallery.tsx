"use client";
import { Image } from "@/lib/shopify/types";
import NextImage from "next/image";
import { useState } from "react";

export const Gallery = ({ images }: { images: Image[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      <NextImage
        src={images?.[activeIndex].url}
        alt={images?.[activeIndex].altText}
        width={500}
        height={500}
      />
      <div className="grid sm:grid-cols-4 grid-cols-3 gap-4 px-1">
        {images?.map((image, index) => {
          return (
            <button
              key={image.url}
              onClick={() => setActiveIndex(index)}
              className={`transition-all ease-in ${
                activeIndex === index
                  ? "outline outline-2 outline-black outline-offset-2"
                  : ""
              }`}
            >
              <div>
                <NextImage
                  src={image.url}
                  alt={image.altText}
                  width={500}
                  height={500}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
