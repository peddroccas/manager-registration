/*
  Warnings:

  - The values [ACCEPT] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('NEW', 'ACCEPTED', 'DENIED');
ALTER TABLE "registereds" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "requesters" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "requesters" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TABLE "registereds" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "registereds" ALTER COLUMN "status" SET DEFAULT 'NEW';
ALTER TABLE "requesters" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;
