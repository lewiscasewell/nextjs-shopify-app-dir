import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProduct } from "@/lib/shopify";

import { Gallery } from "@/components/Gallery";
import { BackButton } from "@/components/BackButton";
import { AddToCart } from "@/components/product/add-to-cart";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <div className="p-2 md:p-4 space-y-4">
      <div className="w-full">
        <BackButton />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/2">
          <Gallery images={product.images} />
        </div>
        <div className="w-full md:w-1/2 space-y-20 flex flex-col">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-semibold">{product.title}</h1>
              <p className="text-zinc-800">{product.description}</p>
            </div>
            <p className="text-zinc-700 text-2xl font-semibold">
              {product.priceRange.maxVariantPrice.currencyCode === "GBP"
                ? "£"
                : "$"}
              {Number(product.priceRange.maxVariantPrice.amount).toFixed(2)}
            </p>
          </div>

          <div className="space-y-4 justify-center flex flex-col w-[300px]">
            <AddToCart
              availableForSale={product.availableForSale}
              variants={product.variants}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
