-- CreateTable
CREATE TABLE "CertificateOrder" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,

    CONSTRAINT "CertificateOrder_pkey" PRIMARY KEY ("id")
);
