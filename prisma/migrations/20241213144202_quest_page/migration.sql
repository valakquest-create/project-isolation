-- CreateTable
CREATE TABLE "QuestPage" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "h1" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "questId" INTEGER NOT NULL,

    CONSTRAINT "QuestPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestPage_questId_key" ON "QuestPage"("questId");

-- AddForeignKey
ALTER TABLE "QuestPage" ADD CONSTRAINT "QuestPage_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
