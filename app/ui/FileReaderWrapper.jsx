"use client";

import React, { useState } from "react";

import Actions from "./Actions";
import Table from "./Table";
import { inswData } from "../utils/excel";
import { isValidFormat, makeExcel } from "../utils/utility";
import Stats from "./Stats";

export default function ActionTableWrapper() {
  const [hsCodes, setHsCodes] = useState(null);
  const [status, setStatus] = useState("Disabled");

  const handleClick = async () => {
    alert(`Cek di browser console dulu ya bos
      Tinggal ctrl+shift J
      Cari aja disana ada kok.

      Lagi ada kesibukan lain.`);
    setHsCodes(null);
    // if (status === "Download") {
    //   makeExcel(hsCodes);
    // } else {

    const uniqueHsCodes = [
      ...new Set(
        hsCodes
          .filter((row) => row.length !== 0)
          .map((row) => row.filter((cell) => isValidFormat(cell)))
          .reduce((arr1, arr2) => arr1.concat(arr2)),
      ),
    ];
    const response = await Promise.allSettled(
      uniqueHsCodes.map((hs) => inswData(hs)),
    );
    const uniqueHsWithData = response.map((data) => data.value?.data[0]);
    console.log(uniqueHsWithData);

    //   const response = await Promise.allSettled(
    //     uniqueHsCodes.map((hsCode) => inswData(hsCode)),
    //   );
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
