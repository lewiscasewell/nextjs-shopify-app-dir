import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import clsx from "clsx";
import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import type { CartItem } from "@/lib/shopify/types";
import { Spinner } from "./spinner";

export default function EditItemQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: "plus" | "minus";
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);

  async function handleEdit() {
    setEditing(true);

    const response = await fetch(`/api/cart`, {
      method: type === "minus" && item.quantity - 1 === 0 ? "DELETE" : "PUT",
      body: JSON.stringify({
        lineId: item.id,
        variantId: item.merchandise.id,
        quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
      }),
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setEditing(false);

    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <button
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      onClick={handleEdit}
      disabled={editing}
      className={clsx(
        "ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900",
        {
          "cursor-not-allowed": editing,
          "ml-auto": type === "minus",
        }
      )}
    >
      {editing ? (
        <div>
          <Spinner />
        </div>
      ) : type === "plus" ? (
        <PlusCircleIcon className="h-4 w-4" />
      ) : (
        <MinusCircleIcon className="h-4 w-4" />
      )}
    </button>
  );
}
