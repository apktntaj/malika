import React from "react";

export default function ShipmentFilter() {
  return (
    <div className="flex gap-2 md:justify-center items-center mt-3 md:mt-0">
      <div className="badge badge-ghost">Semua</div>
      <div className="badge badge-primary">Open</div>
      <div className="badge badge-accent">Terbaru</div>
    </div>
  );
}
