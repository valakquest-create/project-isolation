-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "fearLevel" SMALLINT NOT NULL,
    "personFrom" SMALLINT NOT NULL,
    "personTo" SMALLINT NOT NULL,
    "photos" VARCHAR(255)[],

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);
