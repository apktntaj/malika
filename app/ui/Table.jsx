"use client";

import React from "react";
import Alert from "./Alert";
import Row from "./Row";
import { isNotValidFormat } from "../utils/utility";

export default function Table({ data, setDisabled }) {
  setDisabled(true);

  if (!data) return <Alert message="Belum ada file yang diunggah" />;

  if (data.length === 0)
    return <Alert message="Data kosong, silakan isi terlebih dulu." />;

  const isTemplated =
    JSON.stringify(Object.keys(data[0])) === JSON.stringify(["HS CODE"]) ||
    JSON.stringify(Object.keys(data[0])) ===
      JSON.stringify(["HS CODE", "BM", "PPN", "PPH", "PPH NON API"]);
  if (!isTemplated) return <Alert message="Format tidak sesuai." />;

  const anyInvalidFormat = data.some((item) =>
    isNotValidFormat(item["HS CODE"])
  );
  if (!anyInvalidFormat) setDisabled(false);

  const invalideMessage = `Ada beberapa data yang tidak sesuai format HS code.
    Silakan lihat teks yang berwarna merah`;

  return (
    <div className="container">
      {anyInvalidFormat && (
        <Alert message={invalideMessage} variant="warning" />
      )}
      <div className="overflow-x-auto overflow-y-scroll h-96">
        <table className="table table-zebra table-pin-rows text-center">
          <thead>
            <tr className="text-lg text-center">
              <td>No</td>
              <Row items={Object.keys(data[0])} variant={"header"} />
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <Row items={Object.values(item)} variant={"data"} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
