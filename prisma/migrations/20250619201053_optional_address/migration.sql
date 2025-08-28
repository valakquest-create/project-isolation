-- DropForeignKey
ALTER TABLE "Quest" DROP CONSTRAINT "Quest_addressId_fkey";

-- AlterTable
ALTER TABLE "Quest" ALTER COLUMN "addressId" DROP NOT NULL,
ALTER COLUMN "addressId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;
