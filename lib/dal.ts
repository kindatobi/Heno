import prisma from "./prisma";

export async function getDashboardSummary() {
  const [totalRevenue, totalOrders, totalProducts, totalUsers] =
    await Promise.all([
      prisma.order.aggregate({
        _sum: { totalPrice: true },
      }),
      prisma.order.count(),
      prisma.product.count(),
      prisma.user.count(),
    ]);

  return { totalRevenue, totalOrders, totalProducts, totalUsers };
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
