"use server";

import prisma from "@/lib/prisma";
import { formatError } from "@/lib/utils";
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
