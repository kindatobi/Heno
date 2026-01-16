import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { ProductSize, Order, OrderItem } from "@/generated/prisma/client";
import { Cart } from "@/types";
import { FatalError } from "workflow";
import { sendOrderSuccessEmail } from "@/actions/order.actions";
import Stripe from "stripe";

type WorkflowInput = {
  userId: string;
  sessionCartId: string;
  stripeSessionId: string;
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
  amountTotal: number;
};

type OrderWithItems = Order & {
  orderItems: OrderItem[];
};

export async function orderWorkflow(input: WorkflowInput) {
  "use workflow";

  const cart = await loadCart(input.sessionCartId);
  const order = await createOrder(input, cart);
  await updateInventory(cart);
  await clearCart(input.sessionCartId);
  await sendSuccessEmail(order);

  return { orderId: order.id, status: "completed" };
}

async function loadCart(sessionCartId: string) {
  "use step";

  const cart: Cart | null = await redis.get(`cart-${sessionCartId}`);

  if (!cart) {
    throw new FatalError("Cart not found");
  }

  return cart;
}

async function createOrder(input: WorkflowInput, cart: Cart) {
  "use step";
  assertCustomerDetails(input.customerDetails);

  const order = await prisma.order.create({
    data: {
      userId: input.userId,
      customerName: input.customerDetails?.name,
      customerEmail: input.customerDetails?.email,
      shippingAddress: input.customerDetails?.address
        ? JSON.parse(JSON.stringify(input.customerDetails.address))
        : null,
      paymentMethod: "Stripe",
      paymentResult: {
        id: input.stripeSessionId,
        status: "paid",
        email_address: input.customerDetails?.email,
        pricePaid: input.amountTotal / 100,
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

  return order;
}

async function updateInventory(cart: Cart) {
  "use step";

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
      })
    )
  );
}

async function clearCart(sessionCartId: string) {
  "use step";

  await redis.del(`cart-${sessionCartId}`);
}

async function sendSuccessEmail(order: OrderWithItems) {
  "use step";

  await sendOrderSuccessEmail(order);
}

function assertCustomerDetails(
  details: Stripe.Checkout.Session.CustomerDetails | null
): asserts details is Stripe.Checkout.Session.CustomerDetails & {
  name: string;
  email: string;
} {
  if (!details?.name || !details.email) {
    throw new FatalError("Missing customer details from Stripe");
  }
}
