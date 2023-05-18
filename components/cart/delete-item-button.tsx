import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import clsx from "clsx";
import type { CartItem } from "@/lib/shopify/types";
import { Spinner } from "./spinner";

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();
  const [removing, setRemoving] = useState(false);

  async function handleRemove() {
    setRemoving(true);

    const response = await fetch(`/api/cart`, {
      method: "DELETE",
      body: JSON.stringify({
        lineId: item.id,
      }),
    });

    console.log(response);
    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setRemoving(false);

    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <button
      aria-label="Remove cart item"
      onClick={handleRemove}
      disabled={removing}
      className={clsx(
        "ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900",
        {
          "cursor-not-allowed px-0": removing,
        }
      )}
    >
      {removing ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4" />
      )}
    </button>
  );
}
