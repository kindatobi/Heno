import { Prisma, ProductCategory } from "@/generated/prisma/client";
import { CategoryWithCount, ProductItem } from "@/types";
import prisma from "./prisma";

export async function getProductBySlug(productSlug: string) {
  const data = (await prisma.product.findFirst({
    where: { slug: productSlug },
    include: { sizeStock: true },
  })) as ProductItem;
  return data;
}

export async function getProductsCount() {
  const data = await prisma.product.count();
  return data;
}

export async function getAllCategories() {
  const data = await prisma.product.groupBy({
    by: ["category"],
    _count: true,
  });
  return data as CategoryWithCount;
}

export async function getAllProducts({
  page,
  query,
  category,
}: {
  page: number;
  query?: string;
  category?: ProductCategory;
}) {
  const where: Prisma.ProductWhereInput = {};
  if (query) where.name = { contains: query, mode: "insensitive" };
  if (category) where.category = category;

  const data = (await prisma.product.findMany({
    where,
    skip: (page - 1) * 10,
    include: { sizeStock: true },
  })) as ProductItem[];

  const totalCount = await prisma.product.count({ where });
  return { data, totalPages: Math.ceil(totalCount / 10) };
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
  const where: Prisma.OrderWhereInput = {};
  if (query) where.customerName = { contains: query, mode: "insensitive" };

  const [allOrders, totalCount] = await Promise.all([
    prisma.order.findMany({
      where,
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

export async function getProductById(id: string) {
  const data = await prisma.product.findFirst({
    where: { id },
    include: { sizeStock: true },
  });
  if (!data) throw new Error("Product not found");
  return data as ProductItem;
}
