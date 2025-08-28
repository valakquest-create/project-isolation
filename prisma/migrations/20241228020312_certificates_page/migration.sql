-- CreateTable
CREATE TABLE "CertificatesPage" (
    "id" SERIAL NOT NULL,
    "h1" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "images" VARCHAR(255)[],

    CONSTRAINT "CertificatesPage_pkey" PRIMARY KEY ("id")
);
