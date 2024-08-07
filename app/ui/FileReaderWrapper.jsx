"use client";

import React, { useState } from "react";

import Actions from "./Actions";
import Table from "./Table";
import { inswData } from "../utils/excel";
import { makeExcel } from "../utils/utility";

export default function FileReaderWrapper() {
  const [dataHsCodes, setDataHsCodes] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const fetchHsCodes = async () => {
    setDisabled(true);
    const uniqueHsCodes = [
      ...new Set(dataHsCodes.map((item) => item["HS CODE"])),
    ];
    const response = await Promise.allSettled(
      uniqueHsCodes.map((hsCode) => inswData(hsCode))
    );
    const uniqueHsWithData = response.map((data) => data.value?.data[0]);

    const updatedData = dataHsCodes.map((item) => {
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
    setDataHsCodes(updatedData);
    setDisabled(false);

    makeExcel(updatedData);
  };

  return (
    <div>
      <Actions
        onChangeFile={setDataHsCodes}
        fetchable={disabled}
        onCheckTarifClick={fetchHsCodes}
      />
      <Table data={dataHsCodes} setDisabled={setDisabled} />
    </div>
  );
}
