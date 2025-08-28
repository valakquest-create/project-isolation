-- DropForeignKey
ALTER TABLE "QuestPage" DROP CONSTRAINT "QuestPage_questId_fkey";

-- AddForeignKey
ALTER TABLE "QuestPage" ADD CONSTRAINT "QuestPage_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
