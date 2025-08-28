/*
  Warnings:

  - You are about to drop the column `address` on the `Quest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quest" DROP COLUMN "address",
ADD COLUMN     "addressId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
