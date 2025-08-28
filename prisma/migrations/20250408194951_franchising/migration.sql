-- CreateTable
CREATE TABLE "Franchising" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Franchising_pkey" PRIMARY KEY ("id")
);
