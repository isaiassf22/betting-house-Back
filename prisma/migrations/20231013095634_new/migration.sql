/*
  Warnings:

  - The `createdAt` column on the `Game` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Participant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `createdAt` on table `Bet` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `updetedAt` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updetedAt` on the `Participant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bet" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3),
DROP COLUMN "updetedAt",
ADD COLUMN     "updetedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3),
DROP COLUMN "updetedAt",
ADD COLUMN     "updetedAt" TIMESTAMP(3) NOT NULL;
