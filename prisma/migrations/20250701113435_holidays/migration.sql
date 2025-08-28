-- CreateTable
CREATE TABLE "Holiday" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP NOT NULL,

    CONSTRAINT "Holiday_pkey" PRIMARY KEY ("id")
);
