"use client";

import React, { useState } from "react";

import Actions from "./Actions";
import Table from "./Table";
import { inswData } from "../utils/excel";
import { makeExcel } from "../utils/utility";
import Stats from "./Stats";

export default function ActionTableWrapper() {
  const [hsCodes, setHsCodes] = useState(null);
  const [status, setStatus] = useState("Disabled");

  const infoWb = {
    title: "Jumlah Baris",
    value: hsCodes?.length,
    desc: "Baris",
  };

  const handleClick = async () => {
    // if (status === "Download") {
    //   makeExcel(hsCodes);
    // } else {

    //   const response = await Promise.allSettled(
    //     uniqueHsCodes.map((hsCode) => inswData(hsCode)),
    //   );
    //   const uniqueHsWithData = response.map((data) => data.value?.data[0]);
    //   const updatedData = hsCodes.map((item) => {
    //     const updatedItem = uniqueHsWithData.find(
    //       (mfnItem) => mfnItem?.hs_code === item["HS CODE"],
    //     );
    //     if (!updatedItem) {
    //       return {
    //         ...item,
    //         BM: "Data tidak ditemukan",
    //         PPN: "-",
    //         PPH: "-",
    //         "PPH NON API": "-",
    //       };
    //     }
    //     const { new_mfn } = updatedItem;
    //     return {
    //       ...item,
    //       BM: new_mfn[0].bm[0]?.bm,
    //       PPN: new_mfn[0].ppn[0]?.ppn,
    //       PPH: new_mfn[0].pph[0]?.pph,
    //       "PPH NON API": new_mfn[0].pph[1]?.pph,
    //     };
    //   });
    //   setHsCodes(updatedData);
    // }
    //
    const uniqueHsCodes = [...new Set(hsCodes.map((item) => item))];
    console.log(hsCodes);
    console.log(uniqueHsCodes);
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
