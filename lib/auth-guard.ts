import { redirect } from "next/navigation";
import { auth } from "./auth";
import { headers } from "next/headers";
import prisma from "./prisma";

export async function requireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/unauthorized");
  }

  const userId = session?.user.id;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  if (!user) throw new Error("User not found");
  if (user.role !== "ADMIN") redirect("/unauthorized");

  return session;
}
