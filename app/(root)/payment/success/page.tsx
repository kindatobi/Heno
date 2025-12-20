// export default function SuccessPage() {
//   return <div>Thanks for buying our shit!</div>;
// }

import React from "react";
import { Check, ShoppingBag, User, Phone, MessageSquare } from "lucide-react";

export default function SuccessPage() {
  // Sample order data - replace with actual data from your order system
  const orderData = {
    orderNumber: "C00982604708",
    orderDate: "August 16, 2022 at 11:28 AM GMT+8",
    email: "jsmith.mobbin@gmail.com",
    arrivalDate: "Thu, Aug 25 - Mon, Aug 29",
    product: {
      name: "Heno Premium T-Shirt",
      image: "👕",
      style: "CW2288-111",
      size: "M 9 / W 10.5",
      color: "White/White",
      quantity: 1,
      price: 110.0,
    },
    shipping: {
      name: "John Smith",
      address: "1226 University Dr",
      city: "Menlo Park, CA 94025-4221, US",
      email: "jsmith.mobbin@gmail.com",
      phone: "(628) 267-9041",
      speed: "Free Shipping",
      arrivalBy: "Mon, Aug 22",
    },
    payment: {
      method: "VISA",
      expiry: "Exp: ****",
      billingName: "John Smith",
      billingAddress: "1226 University Dr",
      billingCity: "Menlo Park, CA 94025-4221, US",
    },
    subtotal: 110.0,
    shipping: 0.0,
    tax: 0.0,
    total: 110.0,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Thank You!</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Order Confirmation */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">
                  Your Order Was Placed Successfully.
                </h2>
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium">
                  Check your email for your order confirmation.
                </p>
                <p>Your Order: {orderData.orderNumber}</p>
                <p>Order Date: {orderData.orderDate}</p>
                <p>
                  We have sent the order confirmation details to{" "}
                  {orderData.email}
                </p>
              </div>
            </div>

            {/* Shipment Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipment</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Shipping Address</h3>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>{orderData.shipping.name}</p>
                    <p>{orderData.shipping.address}</p>
                    <p>{orderData.shipping.city}</p>
                    <p>{orderData.shipping.email}</p>
                    <p>{orderData.shipping.phone}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Shipping Speed</h3>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>{orderData.shipping.speed}</p>
                    <p>Arrives by {orderData.shipping.arrivalBy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Payment Method</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                      VISA
                    </div>
                    <span className="text-gray-600">
                      {orderData.payment.expiry}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Billing Details</h3>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>{orderData.payment.billingName}</p>
                    <p>{orderData.payment.billingAddress}</p>
                    <p>{orderData.payment.billingCity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Summary</h2>

            <div className="border border-gray-200 rounded-lg p-6 space-y-6">
              <p className="text-sm text-gray-600">
                Arrives {orderData.arrivalDate}
              </p>

              {/* Product */}
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center text-4xl">
                  {orderData.product.image}
                </div>
                <div className="flex-1 text-sm">
                  <h3 className="font-semibold mb-2">
                    {orderData.product.name}
                  </h3>
                  <p className="text-gray-600">
                    Style #: {orderData.product.style}
                  </p>
                  <p className="text-gray-600">
                    Size: {orderData.product.size}
                  </p>
                  <p className="text-gray-600">
                    Color: {orderData.product.color}
                  </p>
                  <p className="text-gray-600">
                    Qty: {orderData.product.quantity} @ $
                    {orderData.product.price.toFixed(2)}
                  </p>
                  <p className="font-semibold mt-1">
                    ${orderData.product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Subtotal
                    <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-xs">
                      i
                    </span>
                  </span>
                  <span>${orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>${orderData.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Estimated Tax
                    <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-xs">
                      i
                    </span>
                  </span>
                  <span>${orderData.tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Order Total */}
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between font-bold">
                  <span>Order Total</span>
                  <span>${orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
