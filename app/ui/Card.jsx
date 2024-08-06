import React from "react";

export default function Card({ item, shipper, consignee }) {
  return (
    <div className="card card-bordered card-compact border text-slate-500 rounded-md shadow-md max-w-96">
      <div className="card-body" style={{ fontSize: "12px" }}>
        <div className="flex justify-between">
          <div>
            <p className="card-title">{item.id.slice(-10)}</p>
            <p>{consignee.find((co) => co.id === item.consigneeId).name}</p>
            <p>{shipper.find((sh) => sh.id === item.shipperId).name}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <p>Nurul Handayani</p>
            <input
              type="checkbox"
              className="toggle toggle-info toggle-sm"
              defaultChecked={item.isDone}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center mt-3 -mb-2">
          <div className="badge badge-xs badge-ghost py-2 px-3 text-slate-500">
            {item.loadType}
          </div>
          <div className="badge badge-xs badge-ghost py-2 px-3 text-slate-500">
            {item.moda}
          </div>
          <div className="badge badge-xs badge-ghost py-2 px-3 text-slate-500">
            {item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
}
