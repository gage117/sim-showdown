/*
  Warnings:

  - Changed the type of `drive_type` on the `Wheelbase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ForceFeedbackType" AS ENUM ('BELT', 'GEAR', 'DIRECT_DRIVE', 'OTHER', 'NA');

-- CreateEnum
CREATE TYPE "ForceUnit" AS ENUM ('NM', 'KG', 'PSI', 'BAR', 'LB', 'LBFT', 'LBIN', 'OTHER', 'NA');

-- AlterEnum
ALTER TYPE "PedalType" ADD VALUE 'PROGRAMMABLE';

-- AlterEnum
ALTER TYPE "SensorType" ADD VALUE 'LOAD_CELL';

-- AlterTable
ALTER TABLE "Pedal" ADD COLUMN     "brakeSensorLoadMax" INTEGER,
ADD COLUMN     "brakeSensorLoadUnit" "ForceUnit",
ADD COLUMN     "notes" TEXT[];

-- AlterTable
ALTER TABLE "Wheelbase" DROP COLUMN "drive_type",
ADD COLUMN     "drive_type" "ForceFeedbackType" NOT NULL;
