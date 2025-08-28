-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
