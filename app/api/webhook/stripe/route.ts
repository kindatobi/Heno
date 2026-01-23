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
