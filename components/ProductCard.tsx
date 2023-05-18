import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
  product,
  key,
  fixedWidth,
}: {
  product: Product;
  key: string;
  fixedWidth?: boolean;
}) => {
  const cardWidth = fixedWidth ? "w-[300px] md:w-[400px]" : "";

  return (
    <Link
      key={key}
      href={`/products/${product.handle}`}
      className={`shadow-xl`}
    >
      <div className={`bg-zinc-800 ${cardWidth} p-2`}>
        <Image
          src={product.images?.[0].url}
          alt="image"
          width={500}
          height={500}
        />

        <div className="pt-1">
          <h1 className="font-semibold text-white">{product.title}</h1>
          <p className="text-zinc-300">
            {product.priceRange.maxVariantPrice.currencyCode === "GBP"
              ? "£"
              : "$"}
            {Number(product.priceRange.maxVariantPrice.amount).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};
