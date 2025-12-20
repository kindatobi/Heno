import { ProductItem } from "@/types";
import prisma from "./prisma";

export async function getProductBySlug(productSlug: string) {
  const data = (await prisma.product.findFirst({
    where: { slug: productSlug },
    include: { sizeStock: true },
  })) as ProductItem;
  return data;
}

export async function getDashboardSummary() {
  const [totalRevenue, totalOrders, totalProducts, totalUsers, latestSales] =
    await Promise.all([
      prisma.order.aggregate({
        _sum: { totalPrice: true },
      }),
      prisma.order.count(),
      prisma.product.count(),
      prisma.user.count(),
      prisma.order.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  return { totalRevenue, totalOrders, totalProducts, totalUsers, latestSales };
}

export async function getAllOrders({
  page,
  query,
}: {
  page: number;
  query: string;
}) {
  const [allOrders, totalCount] = await Promise.all([
    prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * 10,
      take: 10,
    }),
    prisma.order.count(),
  ]);

  return { allOrders, totalPages: Math.ceil(totalCount / 10) };
}

export async function getLowStockProducts() {
  const lowStockItems = await prisma.sizeStock.findMany({
    where: {
      stock: {
        lte: 10,
      },
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
          category: true,
          shopImage: true,
        },
      },
    },
    orderBy: {
      stock: "asc",
    },
    take: 6,
  });

  console.log(lowStockItems);

  return lowStockItems;
}
