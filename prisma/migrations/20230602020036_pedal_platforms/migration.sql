/*
  Warnings:

  - You are about to drop the column `heelplateIncluded` on the `Pedal` table. All the data in the column will be lost.
  - Added the required column `heelPlateIncluded` to the `Pedal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedal" DROP COLUMN "heelplateIncluded",
ADD COLUMN     "heelPlateIncluded" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "_pedalPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_pedalPlatform_AB_unique" ON "_pedalPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_pedalPlatform_B_index" ON "_pedalPlatform"("B");

-- AddForeignKey
ALTER TABLE "_pedalPlatform" ADD CONSTRAINT "_pedalPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pedalPlatform" ADD CONSTRAINT "_pedalPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
