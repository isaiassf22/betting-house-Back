/*
  Warnings:

  - You are about to drop the column `awayTeamName` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `homeTeamName` on the `Bet` table. All the data in the column will be lost.
  - The `createdAt` column on the `Bet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updetedAt` column on the `Bet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `homeTeamScore` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Bet_gameId_key";

-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "awayTeamName",
DROP COLUMN "homeTeamName",
ADD COLUMN     "amountWon" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "awayTeamScore" INTEGER,
ADD COLUMN     "homeTeamScore" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(6),
DROP COLUMN "updetedAt",
ADD COLUMN     "updetedAt" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "awayTeamScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "homeTeamScore" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "isFinished" SET DEFAULT false;
