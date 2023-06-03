-- CreateTable
CREATE TABLE "Wheel" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "brandId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "diameter" DOUBLE PRECISION NOT NULL,
    "type" TEXT,
    "material" TEXT,

    CONSTRAINT "Wheel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_wheelbaseWheel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Wheel_slug_key" ON "Wheel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Wheel_model_key" ON "Wheel"("model");

-- CreateIndex
CREATE UNIQUE INDEX "_wheelbaseWheel_AB_unique" ON "_wheelbaseWheel"("A", "B");

-- CreateIndex
CREATE INDEX "_wheelbaseWheel_B_index" ON "_wheelbaseWheel"("B");

-- AddForeignKey
ALTER TABLE "Wheel" ADD CONSTRAINT "Wheel_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_wheelbaseWheel" ADD CONSTRAINT "_wheelbaseWheel_A_fkey" FOREIGN KEY ("A") REFERENCES "Wheel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_wheelbaseWheel" ADD CONSTRAINT "_wheelbaseWheel_B_fkey" FOREIGN KEY ("B") REFERENCES "Wheelbase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
