/*
  Warnings:

  - You are about to drop the `_pedalPlatform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_wheelbasePlatform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_wheelbaseWheel` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ShifterType" AS ENUM ('HPATTERN', 'SEQUENTIAL', 'SEQUENTIAL_HPATTERN', 'OTHER');

-- CreateEnum
CREATE TYPE "ShifterSpeedType" AS ENUM ('FIVE_PLUS_REVERSE', 'SIX_PLUS_REVERSE', 'SEVEN_PLUS_REVERSE', 'EIGHT_PLUS_REVERSE', 'SEQUENTIAL', 'OTHER');

-- CreateEnum
CREATE TYPE "ShifterThrowType" AS ENUM ('SHORT', 'MEDIUM', 'LONG', 'ADJUSTABLE', 'OTHER');

-- DropForeignKey
ALTER TABLE "_pedalPlatform" DROP CONSTRAINT "_pedalPlatform_A_fkey";

-- DropForeignKey
ALTER TABLE "_pedalPlatform" DROP CONSTRAINT "_pedalPlatform_B_fkey";

-- DropForeignKey
ALTER TABLE "_wheelbasePlatform" DROP CONSTRAINT "_wheelbasePlatform_A_fkey";

-- DropForeignKey
ALTER TABLE "_wheelbasePlatform" DROP CONSTRAINT "_wheelbasePlatform_B_fkey";

-- DropForeignKey
ALTER TABLE "_wheelbaseWheel" DROP CONSTRAINT "_wheelbaseWheel_A_fkey";

-- DropForeignKey
ALTER TABLE "_wheelbaseWheel" DROP CONSTRAINT "_wheelbaseWheel_B_fkey";

-- DropTable
DROP TABLE "_pedalPlatform";

-- DropTable
DROP TABLE "_wheelbasePlatform";

-- DropTable
DROP TABLE "_wheelbaseWheel";

-- CreateTable
CREATE TABLE "Shifter" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "brandId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "ShifterType" NOT NULL,
    "speeds" "ShifterSpeedType"[],
    "throw" "ShifterThrowType"[],
    "proprietary" BOOLEAN NOT NULL,
    "sensorType" "SensorType" NOT NULL DEFAULT 'NA',
    "notes" TEXT[],

    CONSTRAINT "Shifter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlatformToWheelbase" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PlatformToShifter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_WheelToWheelbase" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PedalToPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Shifter_slug_key" ON "Shifter"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_PlatformToWheelbase_AB_unique" ON "_PlatformToWheelbase"("A", "B");

-- CreateIndex
CREATE INDEX "_PlatformToWheelbase_B_index" ON "_PlatformToWheelbase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlatformToShifter_AB_unique" ON "_PlatformToShifter"("A", "B");

-- CreateIndex
CREATE INDEX "_PlatformToShifter_B_index" ON "_PlatformToShifter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WheelToWheelbase_AB_unique" ON "_WheelToWheelbase"("A", "B");

-- CreateIndex
CREATE INDEX "_WheelToWheelbase_B_index" ON "_WheelToWheelbase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PedalToPlatform_AB_unique" ON "_PedalToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_PedalToPlatform_B_index" ON "_PedalToPlatform"("B");

-- AddForeignKey
ALTER TABLE "Shifter" ADD CONSTRAINT "Shifter_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToWheelbase" ADD CONSTRAINT "_PlatformToWheelbase_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToWheelbase" ADD CONSTRAINT "_PlatformToWheelbase_B_fkey" FOREIGN KEY ("B") REFERENCES "Wheelbase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToShifter" ADD CONSTRAINT "_PlatformToShifter_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToShifter" ADD CONSTRAINT "_PlatformToShifter_B_fkey" FOREIGN KEY ("B") REFERENCES "Shifter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WheelToWheelbase" ADD CONSTRAINT "_WheelToWheelbase_A_fkey" FOREIGN KEY ("A") REFERENCES "Wheel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WheelToWheelbase" ADD CONSTRAINT "_WheelToWheelbase_B_fkey" FOREIGN KEY ("B") REFERENCES "Wheelbase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedalToPlatform" ADD CONSTRAINT "_PedalToPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedalToPlatform" ADD CONSTRAINT "_PedalToPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
