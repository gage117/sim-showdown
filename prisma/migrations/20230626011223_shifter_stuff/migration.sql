/*
  Warnings:

  - You are about to drop the column `brandId` on the `Pedal` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Shifter` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Wheel` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Wheelbase` table. All the data in the column will be lost.
  - Added the required column `brandSlug` to the `Pedal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandSlug` to the `Shifter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandSlug` to the `Wheel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandSlug` to the `Wheelbase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pedal" DROP CONSTRAINT "Pedal_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Shifter" DROP CONSTRAINT "Shifter_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Wheel" DROP CONSTRAINT "Wheel_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Wheelbase" DROP CONSTRAINT "Wheelbase_brandId_fkey";

-- AlterTable
ALTER TABLE "Pedal" DROP COLUMN "brandId",
ADD COLUMN     "brandSlug" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Shifter" DROP COLUMN "brandId",
ADD COLUMN     "brandSlug" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Wheel" DROP COLUMN "brandId",
ADD COLUMN     "brandSlug" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Wheelbase" DROP COLUMN "brandId",
ADD COLUMN     "brandSlug" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "Wheelbase" ADD CONSTRAINT "Wheelbase_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wheel" ADD CONSTRAINT "Wheel_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedal" ADD CONSTRAINT "Pedal_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shifter" ADD CONSTRAINT "Shifter_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
