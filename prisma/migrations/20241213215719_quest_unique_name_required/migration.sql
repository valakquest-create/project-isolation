/*
  Warnings:

  - A unique constraint covering the columns `[uniqueName]` on the table `Quest` will be added. If there are existing duplicate values, this will fail.
  - Made the column `uniqueName` on table `Quest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Quest" ALTER COLUMN "uniqueName" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Quest_uniqueName_key" ON "Quest"("uniqueName");
