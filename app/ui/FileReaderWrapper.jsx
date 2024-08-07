"use client";

import React, { useState } from "react";

import Actions from "./Actions";
import Table from "./Table";
import { inswData } from "../utils/excel";
import { makeExcel } from "../utils/utility";

export default function ActionTableWrapper() {
  const [hsCodes, setHsCodes] = useState(null);
  const [status, setStatus] = useState("Disabled");

  console.log(status);

  const hs = {
    invalid: [
      {
        BM: "1234",
        "HS CODE": "1234",
        PPN: "1234",
      },
    ],
    kosong: [],
    tul: [
      {
        "HS CODE": "8535302",
      },
    ],
    tul2: [
      {
        "HS CODE": "85353020",
      },
    ],
    tul3: [
      {
        "HS CODE": "85353020",
        BM: "0.1",
        PPN: "10",
        PPH: "0",
        "PPH NON API": "0",
      },
    ],
  };

  const handleClick = async () => {
    if (status === "Download") {
      makeExcel(hsCodes);
    } else {
      const uniqueHsCodes = [
        ...new Set(hsCodes.map((item) => item["HS CODE"])),
      ];
      const response = await Promise.allSettled(
        uniqueHsCodes.map((hsCode) => inswData(hsCode))
      );
      const uniqueHsWithData = response.map((data) => data.value?.data[0]);
      const updatedData = hsCodes.map((item) => {
        const updatedItem = uniqueHsWithData.find(
          (mfnItem) => mfnItem?.hs_code === item["HS CODE"]
        );
        if (!updatedItem) {
          return {
            ...item,
            BM: "Data tidak ditemukan",
            PPN: "-",
            PPH: "-",
            "PPH NON API": "-",
          };
        }
        const { new_mfn } = updatedItem;
        return {
          ...item,
          BM: new_mfn[0].bm[0].bm,
          PPN: new_mfn[0].ppn[0].ppn,
          PPH: new_mfn[0].pph[0].pph,
          "PPH NON API": new_mfn[0].pph[1].pph,
        };
      });
      setHsCodes(updatedData);
    }
  };

  return (
    <div>
      <Actions
        onChangeFile={setHsCodes}
        buttonChildren={status}
        onButtonClick={handleClick}
      />
      <Table data={hsCodes} setButtonStatus={setStatus} />
    </div>
  );
}
