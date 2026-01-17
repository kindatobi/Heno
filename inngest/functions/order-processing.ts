// import { inngest } from "@/lib/inngest";
// import prisma from "@/lib/prisma";
// import { redis } from "@/lib/redis";
// import { ProductSize } from "@/generated/prisma/client";
// import { Cart } from "@/types";
// import { sendOrderSuccessEmail } from "@/actions/order.actions";
// import { NonRetriableError } from "inngest";
// import Stripe from "stripe";

// type OrderCreatedEvent = {
//   name: "order/created";
//   data: {
//     userId: string;
//     sessionCartId: string;
//     stripeSessionId: string;
//     customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
//     amountTotal: number;
//   };
// };

// export const processOrder = inngest.createFunction(
//   { id: "process-order" },
//   { event: "order/created" },
//   async ({ event, step }) => {
//     // Step 1: Load cart
//     const cart = await step.run("load-cart", async () => {
//       const cart: Cart | null = await redis.get(
//         `cart-${event.data.sessionCartId}`,
//       );

//       if (!cart) {
//         throw new NonRetriableError("Cart not found");
//       }

//       return cart;
//     });

//     // Step 2: Create order
//     const order = await step.run("create-order", async () => {
//       assertCustomerDetails(event.data.customerDetails);

//       return await prisma.order.create({
//         data: {
//           userId: event.data.userId,
//           customerName: event.data.customerDetails?.name,
//           customerEmail: event.data.customerDetails?.email,
//           shippingAddress: event.data.customerDetails?.address
//             ? JSON.parse(JSON.stringify(event.data.customerDetails.address))
//             : null,
//           paymentMethod: "Stripe",
//           paymentResult: {
//             id: event.data.stripeSessionId,
//             status: "paid",
//             email_address: event.data.customerDetails?.email,
//             pricePaid: event.data.amountTotal / 100,
//           },
//           itemsPrice: cart.itemsPrice,
//           shippingPrice: cart.shippingPrice,
//           taxPrice: cart.taxPrice,
//           totalPrice: cart.totalPrice,
//           orderItems: {
//             create: cart.items.map((item) => ({
//               productId: item.productId,
//               qty: item.qty,
//               price: item.price,
//               name: item.name,
//               image: item.image,
//               slug: item.slug,
//               size: item.size,
//             })),
//           },
//         },
//         include: {
//           orderItems: true,
//         },
//       });
//     });

//     // Step 3: Update inventory
//     await step.run("update-inventory", async () => {
//       await Promise.all(
//         cart.items.map((item) =>
//           prisma.sizeStock.update({
//             where: {
//               productId_size: {
//                 productId: item.productId,
//                 size: item.size as ProductSize,
//               },
//             },
//             data: {
//               stock: {
//                 decrement: item.qty,
//               },
//             },
//           }),
//         ),
//       );
//     });

//     // Step 4: Clear cart
//     await step.run("clear-cart", async () => {
//       await redis.del(`cart-${event.data.sessionCartId}`);
//     });

//     // Step 5: Send confirmation email
//     await step.run("send-confirmation-email", async () => {
//       await sendOrderSuccessEmail(order);
//     });

//     return { orderId: order.id, status: "completed" };
//   },
// );

// function assertCustomerDetails(
//   details: Stripe.Checkout.Session.CustomerDetails | null,
// ): asserts details is Stripe.Checkout.Session.CustomerDetails & {
//   name: string;
//   email: string;
// } {
//   if (!details?.name || !details.email) {
//     throw new NonRetriableError("Missing customer details from Stripe");
//   }
// }

// inngest/functions/order-processing.ts
// import { inngest } from "@/lib/inngest";
// import prisma from "@/lib/prisma";
// import { redis } from "@/lib/redis";
// import { ProductSize, Order, OrderItem } from "@/generated/prisma/client";
// import { Cart } from "@/types";
// import { sendOrderSuccessEmail } from "@/actions/order.actions";
// import { NonRetriableError } from "inngest";
// import Stripe from "stripe";

// type OrderCreatedEvent = {
//   name: "order/created";
//   data: {
//     userId: string;
//     sessionCartId: string;
//     stripeSessionId: string;
//     customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
//     amountTotal: number;
//   };
// };

// // Add this type to handle serialized dates from Inngest
// type SerializedOrder = Omit<Order, "createdAt" | "paidAt" | "deliveredAt"> & {
//   createdAt: string;
//   paidAt: string | null;
//   deliveredAt: string | null;
//   orderItems: (Omit<OrderItem, "createdAt"> & { createdAt: string })[];
// };

// export const processOrder = inngest.createFunction(
//   { id: "process-order" },
//   { event: "order/created" },
//   async ({ event, step }) => {
//     // Step 1: Load cart
//     const cart = await step.run("load-cart", async () => {
//       const cart: Cart | null = await redis.get(
//         `cart-${event.data.sessionCartId}`,
//       );

//       if (!cart) {
//         throw new NonRetriableError("Cart not found");
//       }

//       return cart;
//     });

//     // Step 2: Create order
//     const order = (await step.run("create-order", async () => {
//       assertCustomerDetails(event.data.customerDetails);

//       return await prisma.order.create({
//         data: {
//           userId: event.data.userId,
//           customerName: event.data.customerDetails?.name,
//           customerEmail: event.data.customerDetails?.email,
//           shippingAddress: event.data.customerDetails?.address
//             ? JSON.parse(JSON.stringify(event.data.customerDetails.address))
//             : null,
//           paymentMethod: "Stripe",
//           paymentResult: {
//             id: event.data.stripeSessionId,
//             status: "paid",
//             email_address: event.data.customerDetails?.email,
//             pricePaid: event.data.amountTotal / 100,
//           },
//           itemsPrice: cart.itemsPrice,
//           shippingPrice: cart.shippingPrice,
//           taxPrice: cart.taxPrice,
//           totalPrice: cart.totalPrice,
//           orderItems: {
//             create: cart.items.map((item) => ({
//               productId: item.productId,
//               qty: item.qty,
//               price: item.price,
//               name: item.name,
//               image: item.image,
//               slug: item.slug,
//               size: item.size,
//             })),
//           },
//         },
//         include: {
//           orderItems: true,
//         },
//       });
//     })) as SerializedOrder; // Type assertion for serialized data

//     // Step 3: Update inventory
//     await step.run("update-inventory", async () => {
//       await Promise.all(
//         cart.items.map((item) =>
//           prisma.sizeStock.update({
//             where: {
//               productId_size: {
//                 productId: item.productId,
//                 size: item.size as ProductSize,
//               },
//             },
//             data: {
//               stock: {
//                 decrement: item.qty,
//               },
//             },
//           }),
//         ),
//       );
//     });

//     // Step 4: Clear cart
//     await step.run("clear-cart", async () => {
//       await redis.del(`cart-${event.data.sessionCartId}`);
//     });

//     // Step 5: Send confirmation email
//     await step.run("send-confirmation-email", async () => {
//       // Cast the serialized order to the expected type
//       await sendOrderSuccessEmail(order as any);
//     });

//     return { orderId: order.id, status: "completed" };
//   },
// );

// function assertCustomerDetails(
//   details: Stripe.Checkout.Session.CustomerDetails | null,
// ): asserts details is Stripe.Checkout.Session.CustomerDetails & {
//   name: string;
//   email: string;
// } {
//   if (!details?.name || !details.email) {
//     throw new NonRetriableError("Missing customer details from Stripe");
//   }
// }

import { inngest } from "@/lib/inngest";
import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { ProductSize, Order, OrderItem } from "@/generated/prisma/client";
import { Cart } from "@/types";
import { sendOrderSuccessEmail } from "@/actions/order.actions";
import { NonRetriableError } from "inngest";
import Stripe from "stripe";

// Add this type to handle serialized dates from Inngest
type SerializedOrder = Omit<Order, "createdAt" | "paidAt" | "deliveredAt"> & {
  createdAt: string;
  paidAt: string | null;
  deliveredAt: string | null;
  orderItems: (Omit<OrderItem, "createdAt"> & { createdAt: string })[];
};

export const processOrder = inngest.createFunction(
  { id: "process-order" },
  { event: "order/created" },
  async ({ event, step }) => {
    // Step 1: Load cart
    const cart = await step.run("load-cart", async () => {
      const cart: Cart | null = await redis.get(
        `cart-${event.data.sessionCartId}`,
      );

      if (!cart) {
        throw new NonRetriableError("Cart not found");
      }

      return cart;
    });

    // Step 2: Create order
    const order = (await step.run("create-order", async () => {
      assertCustomerDetails(event.data.customerDetails);

      return await prisma.order.create({
        data: {
          userId: event.data.userId,
          customerName: event.data.customerDetails?.name,
          customerEmail: event.data.customerDetails?.email,
          shippingAddress: event.data.customerDetails?.address
            ? JSON.parse(JSON.stringify(event.data.customerDetails.address))
            : null,
          paymentMethod: "Stripe",
          paymentResult: {
            id: event.data.stripeSessionId,
            status: "paid",
            email_address: event.data.customerDetails?.email,
            pricePaid: event.data.amountTotal / 100,
          },
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
          orderItems: {
            create: cart.items.map((item) => ({
              productId: item.productId,
              qty: item.qty,
              price: item.price,
              name: item.name,
              image: item.image,
              slug: item.slug,
              size: item.size,
            })),
          },
        },
        include: {
          orderItems: true,
        },
      });
    })) as SerializedOrder;

    // Step 3: Update inventory
    await step.run("update-inventory", async () => {
      await Promise.all(
        cart.items.map((item) =>
          prisma.sizeStock.update({
            where: {
              productId_size: {
                productId: item.productId,
                size: item.size as ProductSize,
              },
            },
            data: {
              stock: {
                decrement: item.qty,
              },
            },
          }),
        ),
      );
    });

    // Step 4: Clear cart
    await step.run("clear-cart", async () => {
      await redis.del(`cart-${event.data.sessionCartId}`);
    });

    // Step 5: Send confirmation email
    await step.run("send-confirmation-email", async () => {
      // Convert string dates back to Date objects
      const orderWithDates = {
        ...order,
        createdAt: new Date(order.createdAt),
        paidAt: order.paidAt ? new Date(order.paidAt) : null,
        deliveredAt: order.deliveredAt ? new Date(order.deliveredAt) : null,
        orderItems: order.orderItems.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        })),
      };

      await sendOrderSuccessEmail(orderWithDates);
    });

    return { orderId: order.id, status: "completed" };
  },
);

function assertCustomerDetails(
  details: Stripe.Checkout.Session.CustomerDetails | null,
): asserts details is Stripe.Checkout.Session.CustomerDetails & {
  name: string;
  email: string;
} {
  if (!details?.name || !details.email) {
    throw new NonRetriableError("Missing customer details from Stripe");
  }
}
