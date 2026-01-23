// import { ProductSize } from "@/generated/prisma/client";
// import prisma from "@/lib/prisma";
// import { redis } from "@/lib/redis";
// import { Cart } from "@/types";
// import { headers } from "next/headers";
// import Stripe from "stripe";

// const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST(req: Request) {
//   const body = await req.text();
//   const signature = (await headers()).get("stripe-signature") as string;

//   let event: Stripe.Event;

//   try {
//     event = stripeInstance.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET as string
//     );
//   } catch (error: unknown) {
//     console.error("Webhook signature verification failed:", error);
//     return new Response("Webhook Error", { status: 400 });
//   }

//   switch (event.type) {
//     case "checkout.session.completed": {
//       const session = event.data.object as Stripe.Checkout.Session;

//       const cart: Cart | null = await redis.get(
//         `cart-${session.metadata?.sessionCartId}`
//       );

//       await prisma.order.create({
//         data: {
//           userId: session.metadata?.userId as string,
//           customerName: session.customer_details?.name as string,
//           customerEmail: session.customer_details?.email as string,
//           shippingAddress: session.customer_details?.address
//             ? JSON.parse(JSON.stringify(session.customer_details.address))
//             : null,
//           paymentMethod: "Stripe",
//           paymentResult: {
//             id: session.id,
//             status: session.payment_status,
//             email_address: session.customer_details?.email as string,
//             pricePaid: (session.amount_total || 0) / 100,
//           },
//           itemsPrice: cart?.itemsPrice,
//           shippingPrice: cart?.shippingPrice,
//           taxPrice: cart?.taxPrice,
//           totalPrice: cart?.totalPrice,
//           orderItems: {
//             create: cart?.items.map((item) => ({
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
//       });

//       await Promise.all(
//         cart?.items.map((item) =>
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
//           })
//         ) || []
//       );

//       await redis.del(`cart-${session.metadata?.userId}`);
//       break;
//     }
//     default: {
//       console.log("Unhandled event type:", event.type);
//     }
//   }

//   return new Response(null, { status: 200 });
// }

// import Stripe from "stripe";
// import { headers } from "next/headers";
// import { orderWorkflow } from "@/workflows/orderWorkflow";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   const body = await req.text();
//   const signature = (await headers()).get("stripe-signature")!;

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//   } catch (err) {
//     console.error("Webhook signature verification failed:", err);
//     return new Response("Webhook Error", { status: 400 });
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object as Stripe.Checkout.Session;

//     orderWorkflow({
//       userId: session.metadata!.userId,
//       sessionCartId: session.metadata!.sessionCartId,
//       stripeSessionId: session.id,
//       customerDetails: session.customer_details,
//       amountTotal: session.amount_total!,
//     });
//   }

//   return new Response(null, { status: 200 });
// }

import Stripe from "stripe";
import { headers } from "next/headers";
import { inngest } from "@/lib/inngest";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    await inngest.send({
      name: "order/created",
      data: {
        userId: session.metadata!.userId,
        sessionCartId: session.metadata!.sessionCartId,
        stripeSessionId: session.id,
        customerDetails: session.customer_details,
        amountTotal: session.amount_total!,
      },
    });
  }

  return new Response(null, { status: 200 });
}
