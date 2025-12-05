"use client";

import { useState } from "react";
import CartModal from "./cart-modal";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CartModal cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div className="flex justify-between">
        {/* LOGO */}
        <div>HENO</div>
        {/* OTHER THINGS */}
        <div>THINGS</div>
        {/* BAG */}
        <div>
          <span
            className="cursor-pointer"
            onClick={() => setCartOpen((prev) => !prev)}
          >
            BAG(0)
          </span>
        </div>
        {/* FUGA */}
        <div>OPEN</div>
      </div>
    </>
  );
}
