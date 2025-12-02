/*
  Warnings:

  - You are about to drop the column `isPaid` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `paidAt` on the `Order` table. All the data in the column will be lost.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "isPaid",
DROP COLUMN "paidAt";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL;
