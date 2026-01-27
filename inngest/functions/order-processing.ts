import { inngest } from "@/lib/inngest";
import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { ProductSize, Order, OrderItem } from "@/generated/prisma/client";
import { Cart } from "@/types";
import { sendOrderSuccessEmail } from "@/actions/order.actions";
import { NonRetriableError } from "inngest";
import Stripe from "stripe";

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
    const cart = await step.run("load-cart", async () => {
      const cart: Cart | null = await redis.get(
        `cart-${event.data.sessionCartId}`,
      );

      if (!cart) {
        throw new NonRetriableError("Cart not found");
      }

      return cart;
    });

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
      });
    })) as SerializedOrder;

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

    await step.run("clear-cart", async () => {
      await redis.del(`cart-${event.data.sessionCartId}`);
    });

    await step.run("send-confirmation-email", async () => {
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
