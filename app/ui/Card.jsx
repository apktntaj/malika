import React from "react";
import Badge from "./Badge";

export default function Card({ item }) {
  const info = [
    { ETA: "2024-08-27" },
    { moda: "SEA" },
    { pieces: 4 },
    { containerType: "20RF" },
  ];

  return (
    <div className="card card-bordered card-compact border text-slate-500 rounded-md shadow-md max-w-96">
      <div className="card-body" style={{ fontSize: "12px" }}>
        <div className="flex justify-between">
          <div>
            <p className="card-title">{item.noJob}</p>
            <p>{item.consignee}</p>
            <p>{item.shipper}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <p>Nurul Handayani</p>
            <input
              type="checkbox"
              className="toggle toggle-success toggle-sm"
              defaultChecked
            />
          </div>
        </div>
        <div className="flex gap-2 items-center mt-3 -mb-2">
          {info.map((i, idx) => (
            <div
              key={idx}
              className="badge badge-xs badge-ghost py-2 px-3 text-slate-500"
            >
              {Object.values(i)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
