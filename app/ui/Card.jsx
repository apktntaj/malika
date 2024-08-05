import React from "react";

export default function Card({ item }) {
  return (
    <div className="card card-bordered card-compact bg-teal-400 text-slate-500 rounded-md shadow-md max-w-96">
      <div className="card-body">
        <div className="flex gap-6">
          <div>
            <p className="card-title">{item.noJob}</p>
            <p>{item.ETA}</p>
            <p>{item.progress}</p>
          </div>
          <div>
            <p>{item.shipper}</p>
            <p>{item.consignee}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <label>is done?</label>
          <input
            type="checkbox"
            className="toggle toggle-success"
            defaultChecked
          />
        </div>
      </div>
    </div>
  );
}
