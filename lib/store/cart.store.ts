import { Cart, CartItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calcPrice } from "../utils";

interface CartStore {
  cart: Cart | null;
  addItemToBag: (item: Omit<CartItem, "qty">) => void;
  removeFromBag: (productId: string, size: string) => void;
  syncCart: (newCart: Cart) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: null,

      addItemToBag: (item) => {
        set((state) => {
          const currentCart = state.cart;

          if (!currentCart || currentCart.items.length === 0) {
            const newItem = { ...item, qty: 1 };
            const newCart: Cart = {
              items: [newItem],
              ...calcPrice([newItem]),
            };
            return { cart: newCart };
          }

          const existingItem = currentCart.items.find(
            (x) => x.productId === item.productId && x.size === item.size
          );

          let updatedItems: CartItem[];

          if (!existingItem) {
            updatedItems = [...currentCart.items, { ...item, qty: 1 }];
          } else {
            updatedItems = currentCart.items.map((x) =>
              x.productId === item.productId && x.size === item.size
                ? { ...x, qty: x.qty + 1 }
                : x
            );
          }

          const updatedCart: Cart = {
            items: updatedItems,
            ...calcPrice(updatedItems),
          };

          return { cart: updatedCart };
        });
      },

      removeFromBag: (productId, size) => {
        set((state) => {
          if (!state.cart) return state;

          const updatedItems = state.cart.items.filter(
            (item) => !(item.productId === productId && item.size === size)
          );

          if (updatedItems.length === 0) {
            return { cart: null };
          }

          const updatedCart: Cart = {
            items: updatedItems,
            ...calcPrice(updatedItems),
          };

          return { cart: updatedCart };
        });
      },
      syncCart: (newCart) => {
        set({ cart: newCart });
      },

      clearCart: () => {
        set({ cart: null });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
