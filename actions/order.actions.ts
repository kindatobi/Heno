"use server";

import prisma from "@/lib/prisma";
import { formatError } from "@/lib/utils";
import { Resend } from "resend";
import { Order, OrderItem } from "@/generated/prisma/client";
import { revalidatePath } from "next/cache";

export async function deleteOrder(id: string) {
  try {
    await prisma.order.delete({
      where: { id },
    });
    revalidatePath("/admin/orders");
    return { success: true, message: "Order deleted successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

const resend = new Resend(process.env.RESEND_API_KEY);

type ShippingAddress = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
};

type OrderWithItems = Order & {
  orderItems: OrderItem[];
};

export async function sendOrderSuccessEmail(order: OrderWithItems) {
  try {
    const shippingAddress = order.shippingAddress as ShippingAddress | null;

    const { data, error } = await resend.emails.send({
      from: "Your Store <orders@yourdomain.com>", // Replace with your verified domain
      to: [order.customerEmail],
      subject: `Order Confirmation #${order.id} - Thank you for your purchase!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            Order Confirmed!
          </h1>
          
          <p style="font-size: 16px; color: #555;">
            Hi ${order.customerName || "Customer"},
          </p>
          
          <p style="font-size: 16px; color: #555;">
            Thank you for your order! We're processing it now and will send you another email once it ships.
          </p>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h2 style="color: #333; margin-top: 0;">Order Details</h2>
            <p style="margin: 5px 0;"><strong>Order ID:</strong> ${order.id}</p>
            <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date(
              order.createdAt
            ).toLocaleDateString()}</p>
            <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${
              order.paymentMethod
            }</p>
          </div>

          ${
            shippingAddress
              ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h2 style="color: #333; margin-top: 0;">Shipping Address</h2>
            <p style="margin: 5px 0;">${shippingAddress.line1}</p>
            ${
              shippingAddress.line2
                ? `<p style="margin: 5px 0;">${shippingAddress.line2}</p>`
                : ""
            }
            <p style="margin: 5px 0;">${shippingAddress.city}, ${
                  shippingAddress.state
                } ${shippingAddress.postal_code}</p>
            <p style="margin: 5px 0;">${shippingAddress.country}</p>
          </div>
          `
              : ""
          }

          <div style="margin: 30px 0;">
            <h2 style="color: #333;">Order Items</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 2px solid #ddd;">
                  <th style="text-align: left; padding: 10px;">Item</th>
                  <th style="text-align: center; padding: 10px;">Size</th>
                  <th style="text-align: center; padding: 10px;">Qty</th>
                  <th style="text-align: right; padding: 10px;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${order.orderItems
                  .map(
                    (item) => `
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 15px;">
                      <div style="display: flex; align-items: center; gap: 10px;">
                        ${
                          item.image
                            ? `<img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">`
                            : ""
                        }
                        <div>
                          <strong>${item.name}</strong>
                        </div>
                      </div>
                    </td>
                    <td style="text-align: center; padding: 15px;">${
                      item.size || "N/A"
                    }</td>
                    <td style="text-align: center; padding: 15px;">${
                      item.qty
                    }</td>
                    <td style="text-align: right; padding: 15px;">$${item.price.toFixed(
                      2
                    )}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <table style="width: 100%;">
              <tr>
                <td style="padding: 5px 0; text-align: right;"><strong>Subtotal:</strong></td>
                <td style="padding: 5px 0; text-align: right; width: 100px;">$${order.itemsPrice.toFixed(
                  2
                )}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; text-align: right;"><strong>Shipping:</strong></td>
                <td style="padding: 5px 0; text-align: right;">$${order.shippingPrice.toFixed(
                  2
                )}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; text-align: right;"><strong>Tax:</strong></td>
                <td style="padding: 5px 0; text-align: right;">$${order.taxPrice.toFixed(
                  2
                )}</td>
              </tr>
              <tr style="border-top: 2px solid #333;">
                <td style="padding: 10px 0; text-align: right; font-size: 18px;"><strong>Total:</strong></td>
                <td style="padding: 10px 0; text-align: right; font-size: 18px; color: #4CAF50;"><strong>$${order.totalPrice.toFixed(
                  2
                )}</strong></td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; margin: 40px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/orders/${order.id}" 
               style="background-color: #4CAF50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              View Order Details
            </a>
          </div>

          <p style="color: #666; font-size: 14px; margin-top: 40px; text-align: center;">
            If you have any questions about your order, please contact us at 
            <a href="mailto:support@yourdomain.com" style="color: #4CAF50;">support@yourdomain.com</a>
          </p>

          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            This is an automated email. Please do not reply directly to this message.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending order confirmation email:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log("Order confirmation email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to send order success email:", error);
    throw error;
  }
}
