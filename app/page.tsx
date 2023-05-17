import { getProducts } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts({});

  return (
    <section className="flex md:flex-row flex-col h-full min-h-screen">
      <div className=" px-4 md:w-1/2 my-auto">
        <h1 className="p-4 text-7xl hover:text-white transition-colors ease-in text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-white to-zinc-600">
          What&apos;s your sock count?
        </h1>
      </div>
      <div className="md:w-1/2 bg-white flex justify-center items-center">
        {products.map((prod) => {
          return (
            <Link key={prod.id} href={`/products/${prod.handle}`}>
              <div className="bg-zinc-900 max-w-[300px] p-2">
                <Image
                  src={prod.images?.[0].url}
                  alt="image"
                  width={300}
                  height={300}
                />

                <h1>{prod.title}</h1>
                <p>
                  {prod.priceRange.maxVariantPrice.currencyCode === "GBP"
                    ? "£"
                    : "$"}
                  {Number(prod.priceRange.maxVariantPrice.amount).toFixed(0)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
