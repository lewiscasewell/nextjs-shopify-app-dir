"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { ProductVariant } from "@/lib/shopify/types";
import { Spinner } from "../cart/spinner";

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const variant = variants.find((variant: ProductVariant) =>
      variant.selectedOptions.every(
        (option) => option.value === searchParams.get(option.name.toLowerCase())
      )
    );

    if (variant) {
      setSelectedVariantId(variant.id);
    }
  }, [searchParams, variants, setSelectedVariantId]);

  const isMutating = adding || isPending;

  async function handleAdd() {
    if (!availableForSale) return;

    setAdding(true);

    const response = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        merchandiseId: selectedVariantId,
      }),
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setAdding(false);

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <button
      aria-label="Add item to cart"
      disabled={isMutating}
      onClick={handleAdd}
      className={clsx(
        "flex w-full items-center justify-center p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 bg-black ",
        {
          "cursor-not-allowed opacity-60": !availableForSale,
          "cursor-not-allowed": isMutating,
        }
      )}
    >
      <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
      {isMutating ? (
        <div className="pl-2">
          <Spinner />
        </div>
      ) : null}
    </button>
  );
}
