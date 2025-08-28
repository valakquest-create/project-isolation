/*
  Warnings:

  - Made the column `name` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;
