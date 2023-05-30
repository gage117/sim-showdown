/*
  Warnings:

  - Made the column `name` on table `Brand` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Brand` required. This step will fail if there are existing NULL values in that column.
  - Made the column `model` on table `Wheelbase` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Wheelbase` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Brand" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Wheelbase" ALTER COLUMN "model" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;
