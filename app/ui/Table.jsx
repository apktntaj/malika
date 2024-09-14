"use client";

import React from "react";

import Alert from "./Alert";
import Row from "./Row";

export default function Table({ data, setButtonStatus }) {
  if (!data) return <Alert message="Belum ada data" />;

  const fixedData = data.map((arr) => nullingHolesElement(arr));
  const rows = fixedData.map((row, idx) => (
    <tr className="hover" key={idx}>
      <td>{idx + 1}</td>
      <Row rowCells={row} />
    </tr>
  ));
  setButtonStatus("Disabled");

  return (
    <div className="overflow-x-auto max-h-screen">
      <table className="table">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function nullingHolesElement(arr) {
  return Array.from(arr, (el) => (el !== undefined ? el : null));
}
