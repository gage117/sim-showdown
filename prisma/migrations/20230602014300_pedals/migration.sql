-- CreateEnum
CREATE TYPE "PedalType" AS ENUM ('THROTTLE', 'BRAKE', 'CLUTCH', 'THROTTLE_BRAKE', 'THREE_PEDAL');

-- CreateEnum
CREATE TYPE "SensorType" AS ENUM ('HALL', 'POTENTIOMETER', 'INDUCTIVE', 'MAGNETIC', 'HYRDRAULIC_PRESSURE', 'OPTICAL', 'OTHER', 'NA');

-- CreateTable
CREATE TABLE "Pedal" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "type" "PedalType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "throttleSensor" "SensorType" NOT NULL DEFAULT 'NA',
    "brakeSensor" "SensorType" NOT NULL DEFAULT 'NA',
    "clutchSensor" "SensorType" NOT NULL DEFAULT 'NA',
    "heelplateIncluded" BOOLEAN NOT NULL,

    CONSTRAINT "Pedal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pedal_slug_key" ON "Pedal"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Pedal_model_key" ON "Pedal"("model");
