/*
  Warnings:

  - You are about to alter the column `model` on the `Wheelbase` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[model]` on the table `Wheelbase` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Wheelbase" ALTER COLUMN "model" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Wheelbase_model_key" ON "Wheelbase"("model");
