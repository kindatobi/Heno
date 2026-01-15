"use client";

import { useCartStore } from "@/lib/store/cart.store";
import { useState } from "react";
import { ProductToast } from "@/components/product-toast";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shopImage: string;
}

export default function AddToCartButton({
  product,
  selectedSize,
}: {
  product: Product;
  selectedSize: string;
}) {
  const addItemToBag = useCartStore((state) => state.addItemToBag);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowToast(true);
      return;
    }
    addItemToBag({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      size: selectedSize,
      image: product.shopImage,
    });

    setShowToast(true);
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white rounded-[6px] py-4 px-6 text-sm uppercase font-bcd-diatype tracking-[0.08em] font-medium hover:bg-[#3C3C3C] transition-colors"
      >
        ADD TO BAG
      </button>

      {showToast && (
        <ProductToast
          show={showToast}
          message={
            selectedSize
              ? "Item has been added to cart"
              : "You need to select a size first"
          }
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
