-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255)
);

-- CreateTable
CREATE TABLE "Wheelbase" (
    "id" SERIAL NOT NULL,
    "model" TEXT,
    "brand" TEXT,
    "price" DOUBLE PRECISION,
    "torque" DOUBLE PRECISION,
    "drive_type" TEXT,
    "swappable_wheels" BOOLEAN,
    "platforms" TEXT[],
    "degrees_of_rotation" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_id_key" ON "Brand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wheelbase_id_key" ON "Wheelbase"("id");
