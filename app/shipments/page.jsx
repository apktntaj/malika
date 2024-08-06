import React from "react";
import { prisma } from "../utils/db";
import Search from "../ui/Search";
import ShipmentFilter from "../ui/ShipmentFilter";
import Card from "../ui/Card";

// async function getShipments() {
//   const response = await prisma.shipment.findMany();
//   console.log(response);
//   return response;
// }
const dummyShipments = [
  {
    id: 1,
    noJob: "0120201",
    ETA: "2024-08-27",
    shipmetType: "FCL",
    moda: "SEA",
    pieces: 4,
    containerType: "20RF",
    shipper: "Panah perdana",
    consignee: "Indonusa",
  },
  {
    id: 2,
    noJob: "0120202",
    ETA: "2024-09-01",
    shipmetType: "LCL",
    moda: "SEA",
    pieces: 4,
    containerType: "20RF",
    shipper: "Panah perdana",
    consignee: "Indonusa",
  },
  // Add more dummy shipments here...
];

// async function getShipments() {
//   const response = await prisma.shipment.findMany();
//   console.log(response);
//   return response;
// }

export default async function ShipmentPage() {
  // const shipments = await getShipments();
  const shipments = dummyShipments;

  return (
    <div className="container mx-auto">
      <h1 className="p-2 text-4xl font-bold text-slate-600 text-center">
        Shipments List
      </h1>
      <div className="p-2 md:flex justify-between w-full gap-2">
        <Search />
        <ShipmentFilter />
      </div>
      <div className="p-2 flex flex-col md:grid grid-cols-3 gap-2">
        {shipments.map((shipment) => (
          <Card key={shipment.id} item={shipment} />
        ))}
      </div>
    </div>
  );
}
