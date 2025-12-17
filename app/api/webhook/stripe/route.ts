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

//       if (!cart) {
//         return new Response("Cart not found", { status: 400 });
//       }

//       await prisma.order.create({
//         data: {
//           userId: session.metadata?.userId as string,
//           customerName: session.customer_details?.name as string,
//           customerEmail: session.customer_details?.email as string,
//           shippingAddress: session.collected_information?.shipping_details,
//           paymentMethod: "Stripe",
//           paymentResult: {
//             id: session.id,
//             status: session.payment_status,
//             email_address: session.customer_details?.email as string,
//             pricePaid: (session.amount_total || 0) / 100,
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
//             })),
//           },
//         },
//       });
//       await redis.del(`cart-${session.metadata?.userId}`);
//       break;
//     }
//     default: {
//       console.log("Unhandled event type:", event.type);
//     }
//   }

//   return new Response(null, { status: 200 });
// }
