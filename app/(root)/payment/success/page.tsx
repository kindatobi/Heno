"use client";

import { useCartStore } from "@/lib/store/cart.store";

import Image from "next/image";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="pt-16 md:pt-0 bg-[#F5F6F4] text-[#191919]">
      <div className="md:hidden">
        <div className="my-x-cont">
          <h1 className="text-6xl font-neue-haas font-medium mb-7 leading-none">
            Thank you for your order!
          </h1>

          <div className="space-y-9 text-[16px] font-neue-haas tracking-wide leading-[1.1em] font-normal">
            <p className="font-neue-haas">
              We&apos;ve received your payment and are processing your order.
            </p>

            <p className="font-neue-haas">
              You&apos;ll receive a confirmation email shortly at the address
              you provided with all the details of your purchase.
            </p>

            <p className="font-neue-haas">
              If you have any questions about your order, please don&apos;t
              hesitate to contact us.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="h-screen relative">
          <Image
            src="/about-image1.webp"
            alt="Order confirmed"
            fill
            priority
            className="object-cover"
          />
          <h1 className="absolute bottom-0 left-0 right-0 px-8 mb-6 text-[80px] font-neue-haas font-normal leading-none text-[#F5F6F4]">
            Thank You!
          </h1>
        </div>

        <div className="my-x-cont">
          <div className="space-y-4 mt-20 text-[16px] font-neue-haas leading-[1.2em] font-normal">
            <div className="space-y-6 max-w-[60%] mx-auto">
              <h2 className="text-[40px]">Your Order is Confirmed</h2>
              <p className="tracking-wide">
                We&apos;ve received your payment and are processing your order.
                You&apos;ll receive a confirmation email shortly at the address
                you provided with all the details of your purchase, including
                your order number and estimated delivery date.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                Our team is now preparing your items for shipment. You can
                expect updates on your order status via email. If you have any
                questions or concerns about your order, please don&apos;t
                hesitate to reach out to our customer service team.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                Thank you for choosing Heno. We appreciate your business and
                look forward to serving you again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
