"use client";

import React from "react";
import Alert from "./Alert";
import Row from "./Row";
import { isValidFormat } from "../utils/utility";
import TemplateExcelLink from "./TemplateExcelLink";

export default function Table({ data, setButtonStatus }) {
  if (!data) return <TemplateExcelLink />;

  const statusData = dataValidation(data);

  setButtonStatus("Disabled");
  switch (statusData) {
    case -1: {
      return (
        <>
          <Alert message="Format tidak sesuai." />
          <TemplateExcelLink />
        </>
      );
    }
    case 0: {
      return <Alert message="Data kosong, silakan isi terlebih dulu." />;
    }
    case 1: {
      if (allHsCodesValid(data)) setButtonStatus("Tarik Data");

      if (allHsCodesValid(data) && isFetched(data)) setButtonStatus("Download");

      const invalideMessage =
        "Ada beberapa data yang tidak sesuai format HS code. Silakan lihat teks yang berwarna merah";

      return (
        <div className="container">
          {!allHsCodesValid && (
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
  }
}

function isFetched(data) {
  return data.every((item) => item["BM"]?.includes("%"));
}

function allHsCodesValid(data) {
  return data.some((item) => isValidFormat(item["HS CODE"]));
}

function isTemplated(data) {
  return (
    JSON.stringify(Object.keys(data[0])) === JSON.stringify(["HS CODE"]) ||
    JSON.stringify(Object.keys(data[0])) ===
      JSON.stringify(["HS CODE", "BM", "PPN", "PPH", "PPH NON API"])
  );
}

function dataValidation(data) {
  if (data.length === 0) return 0;

  if (!isTemplated(data)) return -1;
  if (isTemplated(data)) return 1;
}
