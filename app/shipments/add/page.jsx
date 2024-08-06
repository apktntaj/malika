import FormAddShipment from "@/app/ui/FormAddShipment";
import Pagination from "@/app/ui/Pagination";
import Title from "@/app/ui/Title";
import React from "react";

const forms = ["Shipper", "Consignee", "Cargo Info"];

export default function AddShipment() {
  return (
    <div className="container mx-auto">
      <Title title={"Form Add Shipment"} />
      <FormAddShipment sheets={forms} />
    </div>
  );
}
