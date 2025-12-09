"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { Cart } from "@/types";
import Image from "next/image";

export default function CartAside({ cart }: { cart: Cart | null }) {
  const { toggleCart } = useUIStore();

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className="w-[35%] p-6 bg-amber-950 flex flex-col h-full"
    >
      {/* ASIDE NAV */}

      <div className="flex justify-between">
        <h2>YOUR BAG</h2>
        <p className="cursor-pointer" onClick={toggleCart}>
          CLOSE
        </p>
      </div>

      {/* CONTENT */}
      {!cart || cart.items.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="overflow-y-scroll">
          {cart.items.map((item) => (
            <li key={item.productId}>
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
                <p>{item.price}</p>
                <p>{item.qty}</p>
              </div>
            </li>
          ))}
        </div>
      )}
      <div className="mt-auto">
        <button className="bg-white text-black p-2 rounded-sm cursor-pointer w-full">
          continue to checkout
        </button>
      </div>
    </aside>
  );
}
