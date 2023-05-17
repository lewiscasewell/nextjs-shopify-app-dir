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
        <p className="p-4 md:text-2xl text-lg text-zinc-400 font-light">
          To make pairing your socks easy, each order number is printed on the
          inside cuff of each sock.
        </p>
      </div>
      <div className="md:w-1/2 bg-white flex items-center flex-wrap overflow-hidden relative">
        <div className="animate-carousel flex absolute left-0 gap-4">
          {[...products, ...products].map((prod, index) => {
            const topValue = index * 100;
            return (
              <Link
                key={prod.id}
                href={`/products/${prod.handle}`}
                className={`shadow-xl`}
              >
                <div className="bg-zinc-900 w-[300px] md:w-[400px] p-2">
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
                      {Number(prod.priceRange.maxVariantPrice.amount).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
