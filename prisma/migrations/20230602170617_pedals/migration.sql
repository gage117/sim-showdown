/*
  Warnings:

  - Changed the type of `drive_type` on the `Wheelbase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PedalType" AS ENUM ('THROTTLE', 'BRAKE', 'CLUTCH', 'THROTTLE_BRAKE', 'THREE_PEDAL', 'PROGRAMMABLE');

-- CreateEnum
CREATE TYPE "SensorType" AS ENUM ('HALL', 'POTENTIOMETER', 'LOAD_CELL', 'HYRDRAULIC_PRESSURE', 'INDUCTIVE', 'MAGNETIC', 'OPTICAL', 'OTHER', 'NA');

-- CreateEnum
CREATE TYPE "ForceFeedbackType" AS ENUM ('BELT', 'GEAR', 'DIRECT_DRIVE', 'OTHER', 'NA');

-- CreateEnum
CREATE TYPE "ForceUnit" AS ENUM ('NM', 'KG', 'PSI', 'BAR', 'LB', 'LBFT', 'LBIN', 'OTHER', 'NA');

-- AlterTable
ALTER TABLE "Wheelbase" DROP COLUMN "drive_type",
ADD COLUMN     "drive_type" "ForceFeedbackType" NOT NULL;

-- CreateTable
CREATE TABLE "Pedal" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "brandId" INTEGER NOT NULL,
    "type" "PedalType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "throttle_sensor" "SensorType" NOT NULL DEFAULT 'NA',
    "brake_sensor" "SensorType" NOT NULL DEFAULT 'NA',
    "brake_sensor_load_max" INTEGER,
    "brake_sensor_load_unit" "ForceUnit",
    "clutch_sensor" "SensorType" NOT NULL DEFAULT 'NA',
    "heel_plate_included" BOOLEAN NOT NULL,
    "notes" TEXT[],

    CONSTRAINT "Pedal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_pedalPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pedal_slug_key" ON "Pedal"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Pedal_model_key" ON "Pedal"("model");

-- CreateIndex
CREATE UNIQUE INDEX "_pedalPlatform_AB_unique" ON "_pedalPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_pedalPlatform_B_index" ON "_pedalPlatform"("B");

-- AddForeignKey
ALTER TABLE "Pedal" ADD CONSTRAINT "Pedal_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pedalPlatform" ADD CONSTRAINT "_pedalPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pedalPlatform" ADD CONSTRAINT "_pedalPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
