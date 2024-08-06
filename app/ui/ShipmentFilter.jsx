import React from "react";
import Badge from "./Badge";

const listFilter = [
  { variant: "accent", title: "Semua" },
  { variant: "primary", title: "Open" },
  { variant: "Ghost", title: "Terbaru" },
];

export default function ShipmentFilter() {
  const filter = listFilter.map((item) => (
    <Badge key={item.title} variant={item.variant} children={item.title} />
  ));

  return (
    <div className="flex gap-2 md:justify-center items-center mt-3 md:mt-0">
      {filter}
    </div>
  );
}
