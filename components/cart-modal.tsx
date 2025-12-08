"use client";

import useSWR from "swr";
import { getMyCart } from "@/actions/cart.actions";
import CartAside from "./cart-aside";
import { useUIStore } from "@/lib/store/ui.store";

export default function CartModal() {
  const { cartOpen } = useUIStore();

  const { data: cart } = useSWR(cartOpen ? "cart" : null, () => getMyCart());

  if (!cartOpen) return null;

  return <CartAside cart={cart ?? null} />;
}
