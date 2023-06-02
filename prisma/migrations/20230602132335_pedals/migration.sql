/*
  Warnings:

  - Added the required column `brandId` to the `Pedal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedal" ADD COLUMN     "brandId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pedal" ADD CONSTRAINT "Pedal_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
