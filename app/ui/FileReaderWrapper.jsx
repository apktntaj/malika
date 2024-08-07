"use client";

import React, { useState } from "react";

import Actions from "./Actions";
import Table from "./Table";
import { inswData } from "../utils/excel";
import { makeExcel } from "../utils/utility";

export default function FileReaderWrapper() {
  const [dataHsCodes, setDataHsCodes] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [downloadAble, setDownloadAble] = useState(false);

  const handleClick = async () => {
    if (downloadAble) {
      makeExcel(dataHsCodes);
      setDownloadAble(false);
      setDisabled(null);
    } else {
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
      setDownloadAble(true);
    }
    // makeExcel(updatedData);
  };

  return (
    <div>
      <Actions
        downloadAble={downloadAble}
        onChangeFile={setDataHsCodes}
        fetchable={disabled}
        onCheckTarifClick={handleClick}
      />
      <Table data={dataHsCodes} setDisabled={setDisabled} />
    </div>
  );
}
