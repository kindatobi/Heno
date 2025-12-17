/*
  Warnings:

  - You are about to alter the column `itemsPrice` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Integer`.
  - You are about to alter the column `shippingPrice` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Integer`.
  - You are about to alter the column `taxPrice` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Integer`.
  - You are about to alter the column `totalPrice` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Integer`.
  - You are about to alter the column `price` on the `OrderItem` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Integer`.
  - Added the required column `size` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "itemsPrice" SET DEFAULT 0,
ALTER COLUMN "itemsPrice" SET DATA TYPE INTEGER,
ALTER COLUMN "shippingPrice" SET DEFAULT 0,
ALTER COLUMN "shippingPrice" SET DATA TYPE INTEGER,
ALTER COLUMN "taxPrice" SET DEFAULT 0,
ALTER COLUMN "taxPrice" SET DATA TYPE INTEGER,
ALTER COLUMN "totalPrice" SET DEFAULT 0,
ALTER COLUMN "totalPrice" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "size" TEXT NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE INTEGER;
