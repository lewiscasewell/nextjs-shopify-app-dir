import { getProducts } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

export async function Carousel() {
  const products = await getProducts({});

  if (!products) {
    return null;
  }

  return (
    <div className="animate-carousel flex absolute left-0 gap-4">
      {[...products, ...products].map((prod, index) => {
        return <ProductCard key={prod.id + index} product={prod} fixedWidth />;
      })}
    </div>
  );
}
