import { getProducts } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";

export async function Carousel() {
  const products = await getProducts({});

  if (!products) {
    return null;
  }

  return (
    <div className="animate-carousel flex absolute left-0 gap-4">
      {[...products, ...products].map((prod, index) => {
        return (
          <Link
            key={prod.id + index}
            href={`/products/${prod.handle}`}
            className={`shadow-xl`}
          >
            <div className="bg-zinc-800 w-[300px] md:w-[400px] p-2">
              <Image
                src={prod.images?.[0].url}
                alt="image"
                width={500}
                height={500}
              />

              <div className="pt-1">
                <h1 className="font-semibold">{prod.title}</h1>
                <p className="text-zinc-300">
                  {prod.priceRange.maxVariantPrice.currencyCode === "GBP"
                    ? "£"
                    : "$"}
                  {Number(prod.priceRange.maxVariantPrice.amount).toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
