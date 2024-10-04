-- CreateTable
CREATE TABLE "Requester" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,

    CONSTRAINT "Requester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registered" (
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

    CONSTRAINT "Registered_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Requester_email_key" ON "Requester"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registered_email_key" ON "Registered"("email");
