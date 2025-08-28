/*
  Warnings:

  - You are about to drop the column `slug` on the `QuestPage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quest" ADD COLUMN     "uniqueName" VARCHAR(255);

-- AlterTable
ALTER TABLE "QuestPage" DROP COLUMN "slug";
