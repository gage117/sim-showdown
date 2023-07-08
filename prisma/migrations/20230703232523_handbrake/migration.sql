-- CreateEnum
CREATE TYPE "HandbrakeMountingPosition" AS ENUM ('HORIZONTAL', 'VERTICAL', 'VERTICAL_HORIZONTAL', 'OTHER');

-- CreateTable
CREATE TABLE "Handbrake" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "brandSlug" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "mountingPosition" "HandbrakeMountingPosition",
    "sensorType" "SensorType" NOT NULL DEFAULT 'NA',
    "adjustableAngle" BOOLEAN,
    "adjustableTravel" BOOLEAN,
    "adjustablePressure" BOOLEAN,
    "notes" TEXT[],

    CONSTRAINT "Handbrake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HandbrakeToPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Handbrake_slug_key" ON "Handbrake"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_HandbrakeToPlatform_AB_unique" ON "_HandbrakeToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_HandbrakeToPlatform_B_index" ON "_HandbrakeToPlatform"("B");

-- AddForeignKey
ALTER TABLE "Handbrake" ADD CONSTRAINT "Handbrake_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HandbrakeToPlatform" ADD CONSTRAINT "_HandbrakeToPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Handbrake"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HandbrakeToPlatform" ADD CONSTRAINT "_HandbrakeToPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
