-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NEW', 'ACCEPT', 'DENIED');

-- DropIndex
DROP INDEX "requesters_email_key";

-- AlterTable
ALTER TABLE "requesters" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'NEW';
