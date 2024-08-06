import React from "react";
import { prisma } from "../utils/db";
import Search from "../ui/Search";
import ShipmentFilter from "../ui/ShipmentFilter";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Link from "next/link";
import Title from "../ui/Title";

async function getShipments() {
  const response = await prisma.shipment.findMany();
  return response;
}

async function getShipper() {
  const response = await prisma.shipper.findMany();
  return response;
}

async function getConsignee() {
  const response = await prisma.consignee.findMany();
  return response;
}

export default async function ShipmentPage() {
  const [shipments, shipper, consignee] = await Promise.all([
    getShipments(),
    getShipper(),
    getConsignee(),
  ]);
  // const shipments = await getShipments();
  // const shipper = await getShipper();
  // const consignee = await getConsignee();

  return (
    <div className="container mx-auto">
      <Title title={"List Shipment"} />
      <div className="p-2 space-y-2 md:space-y-0 md:flex justify-between w-full gap-2">
        <Search />
        <div>
          <Link href="/shipments/add">
            <Button children={"Tambah Shipment"} />
          </Link>
        </div>
      </div>
      <div className="p-2 flex flex-col md:grid grid-cols-3 gap-2">
        {shipments.map((shipment) => (
          <Card
            key={shipment.id}
            item={shipment}
            shipper={shipper}
            consignee={consignee}
          />
        ))}
      </div>
    </div>
  );
}
