"use client";

export default function Bag({ totalItems }: { totalItems: number }) {
  return <span className="cursor-pointer">BAG({totalItems})</span>;
}
