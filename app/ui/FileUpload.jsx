"use client";

import React, { useState } from "react";
import TableBarang from "./TableBarang";
import {
  arrayBuffer,
  convertBufferToJson,
  hsCodeFormat,
} from "../utils/utility";
import { inswData } from "../utils/excel";

function FileUpload() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const bufferedFile = arrayBuffer(e.target.files[0]);
    bufferedFile.then((buffer) => {
      const jsonData = convertBufferToJson(buffer);
      setItems(jsonData);
    });
  };

  const handlePreview = async () => {
    setLoading(true);

    const uniqueHsCodes = [...new Set(items.map((item) => item["HS CODE"]))];
    const fetchedUniqueHsCodes = await Promise.all(
      uniqueHsCodes.map((hsCode) => inswData(hsCode))
    );

    const listMfn = fetchedUniqueHsCodes.map((data) => {
      if (!data) {
        return {
          "HS CODE": "HS Code tidak ditemukan",
          BM: "-",
          PPN: "-",
          PPH: "-",
          "PPH NON API": "-",
        };
      }

      const { hs_code, new_mfn } = data.data[0];

      return {
        "HS CODE": hs_code,
        BM: new_mfn[0].bm[0].bm,
        PPN: new_mfn[0].ppn[0].ppn,
        PPH: new_mfn[0].pph[0].pph,
        "PPH NON API": new_mfn[0].pph[1].pph,
      };
    });

    const updatedItems = items.map((item) => {
      // Find the updated item in listMfn
      const updatedItem = listMfn.find(
        (mfnItem) => mfnItem["HS CODE"] === item["HS CODE"]
      );

      return updatedItem ? updatedItem : item;
    });

    setItems(updatedItems);

    setLoading(false);
  };

  return (
    <div className="container px-5 flex flex-col gap-2 mt-5">
      <div className="flex justify-between items-center">
        <input
          type="file"
          accept=".xlsx, .xls"
          className="file-input w-full max-w-xs"
          onChange={handleChange}
        />

        <div>
          <button
            className="btn btn-active mr-5"
            onClick={handlePreview}
            disabled={disabled}
          >
            {loading ? "Mohon tunggu..." : "Cek Tarif"}
          </button>
        </div>
      </div>
      <TableBarang items={items} onDisabled={setDisabled} />
    </div>
  );
}

export default FileUpload;
