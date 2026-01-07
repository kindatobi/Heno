"use client";

import { useCartStore } from "@/lib/store/cart.store";

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

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
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
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="w-full  bg-black text-white rounded-[6px] py-4 px-6 text-sm uppercase tracking-wider font-medium hover:bg-[#3C3C3C] transition-colors"
      >
        ADD TO BAG
      </button>
    </div>
  );
}
