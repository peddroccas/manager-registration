/*
  Warnings:

  - You are about to drop the `Registered` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Requester` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Registered";

-- DropTable
DROP TABLE "Requester";

-- CreateTable
CREATE TABLE "requesters" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,

    CONSTRAINT "requesters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registereds" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "etirEmail" TEXT NOT NULL,
    "hasPgpKey" TEXT NOT NULL,
    "etirPhone" TEXT NOT NULL,

    CONSTRAINT "registereds_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "requesters_email_key" ON "requesters"("email");

-- CreateIndex
CREATE UNIQUE INDEX "registereds_email_key" ON "registereds"("email");
