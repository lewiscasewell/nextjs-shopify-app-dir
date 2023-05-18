import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";
import Image from "next/image";

export const runtime = "edge";

export const metadata = {
  title: "All Products",
  description: "All of the socks we have.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProducts({});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-auto w-fit">
      {products?.map((prod, index) => {
        return <ProductCard product={prod} key={prod.id + index} />;
      })}
    </div>
  );
}
