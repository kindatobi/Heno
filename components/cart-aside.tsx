"use client";

import { checkoutProduct } from "@/actions/product.actions";
import { useCartStore } from "@/lib/store/cart.store";
import { useUIStore } from "@/lib/store/ui.store";
import { formatCurrency } from "@/lib/utils";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartAside() {
  const { toggleCart } = useUIStore();
  const router = useRouter();
  const { clearCart, removeFromBag, cart } = useCartStore();

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className="w-[35%] p-6 bg-amber-950 flex flex-col h-full"
    >
      {/* ASIDE NAV */}

      <div className="flex justify-between">
        <h2>YOUR BAG</h2>
        <p className="cursor-pointer" onClick={clearCart}>
          CLEAR
        </p>
        <p className="cursor-pointer" onClick={toggleCart}>
          CLOSE
        </p>
      </div>

      {/* CONTENT */}
      {!cart || cart.items.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="overflow-y-scroll">
          {cart.items.map((item, i) => (
            <li key={i}>
              <div>
                <Image
                  src={item.image}
                  alt={`this is an image of ${item.name}`}
                  width={70}
                  height={70}
                />
              </div>
              <div className="text-amber-50">
                <p>{item.name}</p>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p>{item.size}</p>
                    <p>{item.qty}X</p>
                  </div>
                  <p>{formatCurrency(item.price)}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromBag(item.productId, item.size)}
                  >
                    remove
                  </p>
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
      <div className="mt-auto">
        <div className="flex justify-between">
          <p>Subtotal: </p>
          <p>{formatCurrency(Number(cart?.itemsPrice))}</p>
        </div>
        {/* <button
          onClick={async () => {
            const result = await checkoutProduct(cart);
            if (result?.url) {
              window.location.href = result.url;
            }
          }}
          className="bg-white text-black p-2 rounded-sm cursor-pointer w-full"
        >
          continue to checkout
        </button> */}
        <button
          onClick={async () => {
            console.log("Button clicked, cart:", cart);
            const result = await checkoutProduct(cart);
            console.log("Result from server:", result);
            if (result?.url) {
              console.log("Redirecting to:", result.url);
              window.location.href = result.url;
            } else {
              console.log("No URL in result");
            }
          }}
          className="bg-white text-black p-2 rounded-sm cursor-pointer w-full"
        >
          continue to checkout
        </button>
      </div>
    </aside>
  );
}
