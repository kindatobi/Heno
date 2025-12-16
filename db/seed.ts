import prisma from "@/lib/prisma";
import sampleData from "./sample-data";
import { Prisma } from "@/generated/prisma/client";

async function main() {
  await prisma.sizeStock.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  for (const user of sampleData.users) {
    await prisma.user.create({ data: user });
  }

  for (const product of sampleData.products) {
    const { sizeStock, sizingInfo, ...productData } = product;

    await prisma.product.create({
      data: {
        ...productData,
        sizingInfo: sizingInfo === null ? Prisma.JsonNull : sizingInfo,
        sizeStock: {
          create: sizeStock,
        },
      },
    });
  }

  console.log("Database seeded successfully");
}

main();
