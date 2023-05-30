/*
  Warnings:

  - You are about to drop the column `brand` on the `Wheelbase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Wheelbase" DROP COLUMN "brand",
ADD COLUMN     "brandId" INTEGER;

-- AddForeignKey
ALTER TABLE "Wheelbase" ADD CONSTRAINT "Wheelbase_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
