/*
  Warnings:

  - The values [HYRDRAULIC_PRESSURE] on the enum `SensorType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SensorType_new" AS ENUM ('HALL', 'POTENTIOMETER', 'LOAD_CELL', 'HYDRAULIC_PRESSURE', 'INDUCTIVE', 'MAGNETIC', 'OPTICAL', 'OTHER', 'NA');
ALTER TABLE "Pedal" ALTER COLUMN "brake_sensor" DROP DEFAULT;
ALTER TABLE "Pedal" ALTER COLUMN "clutch_sensor" DROP DEFAULT;
ALTER TABLE "Pedal" ALTER COLUMN "throttle_sensor" DROP DEFAULT;
ALTER TABLE "Pedal" ALTER COLUMN "throttle_sensor" TYPE "SensorType_new" USING ("throttle_sensor"::text::"SensorType_new");
ALTER TABLE "Pedal" ALTER COLUMN "brake_sensor" TYPE "SensorType_new" USING ("brake_sensor"::text::"SensorType_new");
ALTER TABLE "Pedal" ALTER COLUMN "clutch_sensor" TYPE "SensorType_new" USING ("clutch_sensor"::text::"SensorType_new");
ALTER TYPE "SensorType" RENAME TO "SensorType_old";
ALTER TYPE "SensorType_new" RENAME TO "SensorType";
DROP TYPE "SensorType_old";
ALTER TABLE "Pedal" ALTER COLUMN "brake_sensor" SET DEFAULT 'NA';
ALTER TABLE "Pedal" ALTER COLUMN "clutch_sensor" SET DEFAULT 'NA';
ALTER TABLE "Pedal" ALTER COLUMN "throttle_sensor" SET DEFAULT 'NA';
COMMIT;
