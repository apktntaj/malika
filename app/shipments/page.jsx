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
    noJob: "ABC123",
    ETA: "2022-12-31",
    progress: 50,
    shipper: "John Doe",
    consignee: "Jane Smith",
  },
  {
    id: 2,
    noJob: "DEF456",
    ETA: "2022-12-31",
    progress: 75,
    shipper: "Alice Johnson",
    consignee: "Bob Williams",
  },
  {
    id: 3,
    noJob: "GHI789",
    ETA: "2022-12-31",
    progress: 90,
    shipper: "Sarah Thompson",
    consignee: "Michael Davis",
  },
  {
    id: 4,
    noJob: "JKL012",
    ETA: "2022-12-31",
    progress: 25,
    shipper: "David Wilson",
    consignee: "Emily Brown",
  },
  {
    id: 5,
    noJob: "MNO345",
    ETA: "2022-12-31",
    progress: 60,
    shipper: "Oliver Taylor",
    consignee: "Sophia Martinez",
  },
  {
    id: 6,
    noJob: "PQR678",
    ETA: "2022-12-31",
    progress: 80,
    shipper: "Emma Anderson",
    consignee: "James Thomas",
  },
  {
    id: 7,
    noJob: "STU901",
    ETA: "2022-12-31",
    progress: 40,
    shipper: "Daniel Clark",
    consignee: "Ava Rodriguez",
  },
  {
    id: 8,
    noJob: "VWX234",
    ETA: "2022-12-31",
    progress: 70,
    shipper: "Sophie Lewis",
    consignee: "Benjamin Walker",
  },
  {
    id: 9,
    noJob: "YZA567",
    ETA: "2022-12-31",
    progress: 55,
    shipper: "Lucas Hall",
    consignee: "Chloe Green",
  },
  {
    id: 10,
    noJob: "BCD890",
    ETA: "2022-12-31",
    progress: 35,
    shipper: "Liam Turner",
    consignee: "Mia Adams",
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
