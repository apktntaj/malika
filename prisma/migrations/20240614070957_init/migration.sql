-- CreateEnum
CREATE TYPE "Moda" AS ENUM ('Udara', 'Laut');

-- CreateEnum
CREATE TYPE "CargoType" AS ENUM ('FCL', 'LCL');

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kode" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Negara" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,

    CONSTRAINT "Negara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipper" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "negaraId" TEXT NOT NULL,

    CONSTRAINT "Shipper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consignee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,

    CONSTRAINT "Consignee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Karyawan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "mulaiMasuk" TIMESTAMP(3) NOT NULL,
    "lamaKontrak" INTEGER NOT NULL,

    CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" TEXT NOT NULL,
    "reference" TEXT,
    "moda" "Moda" NOT NULL,
    "isInvoice" BOOLEAN NOT NULL,
    "notes" TEXT NOT NULL,
    "noInvoice" TEXT NOT NULL,
    "tglInvoice" TIMESTAMP(3) NOT NULL,
    "totalInvoice" DOUBLE PRECISION NOT NULL,
    "jumlahItemBarang" INTEGER NOT NULL,
    "shipperId" TEXT NOT NULL,
    "consigneeId" TEXT,
    "karyawanId" TEXT NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoInfo" (
    "id" TEXT NOT NULL,
    "noBL" TEXT NOT NULL,
    "sailDate" TIMESTAMP(3) NOT NULL,
    "eta" TIMESTAMP(3) NOT NULL,
    "voyage" TEXT NOT NULL,
    "vesselName" TEXT NOT NULL,
    "pelabuhanAsal" TEXT NOT NULL,
    "pelabuhanTujuan" TEXT NOT NULL,
    "cargoType" "CargoType" NOT NULL,
    "jumlahContainer" INTEGER,
    "nomorContainer" TEXT,
    "jumlahPackage" INTEGER,
    "weight" DOUBLE PRECISION,
    "volume" DOUBLE PRECISION,
    "shipmentId" TEXT NOT NULL,

    CONSTRAINT "CargoInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CargoInfo_shipmentId_key" ON "CargoInfo"("shipmentId");

-- AddForeignKey
ALTER TABLE "Negara" ADD CONSTRAINT "Negara_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipper" ADD CONSTRAINT "Shipper_negaraId_fkey" FOREIGN KEY ("negaraId") REFERENCES "Negara"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_shipperId_fkey" FOREIGN KEY ("shipperId") REFERENCES "Shipper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_consigneeId_fkey" FOREIGN KEY ("consigneeId") REFERENCES "Consignee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoInfo" ADD CONSTRAINT "CargoInfo_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
