/*
  Warnings:

  - You are about to drop the column `platforms` on the `Wheelbase` table. All the data in the column will be lost.
  - Added the required column `pedals_included` to the `Wheelbase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wheel_included` to the `Wheelbase` table without a default value. This is not possible if the table is not empty.
  - Made the column `price` on table `Wheelbase` required. This step will fail if there are existing NULL values in that column.
  - Made the column `drive_type` on table `Wheelbase` required. This step will fail if there are existing NULL values in that column.
  - Made the column `swappable_wheels` on table `Wheelbase` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brandId` on table `Wheelbase` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Wheelbase" DROP CONSTRAINT "Wheelbase_brandId_fkey";

-- DropIndex
DROP INDEX "Brand_id_key";

-- DropIndex
DROP INDEX "Wheelbase_id_key";

-- AlterTable
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Wheelbase" DROP COLUMN "platforms",
ADD COLUMN     "notes" TEXT[],
ADD COLUMN     "pedals_included" BOOLEAN NOT NULL,
ADD COLUMN     "wheel_included" BOOLEAN NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "drive_type" SET NOT NULL,
ALTER COLUMN "swappable_wheels" SET NOT NULL,
ALTER COLUMN "brandId" SET NOT NULL,
ADD CONSTRAINT "Wheelbase_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_wheelbasePlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Platform_slug_key" ON "Platform"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "Platform"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_wheelbasePlatform_AB_unique" ON "_wheelbasePlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_wheelbasePlatform_B_index" ON "_wheelbasePlatform"("B");

-- AddForeignKey
ALTER TABLE "Wheelbase" ADD CONSTRAINT "Wheelbase_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_wheelbasePlatform" ADD CONSTRAINT "_wheelbasePlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_wheelbasePlatform" ADD CONSTRAINT "_wheelbasePlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Wheelbase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
