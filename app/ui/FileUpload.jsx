"use client";

import React, { useEffect, useState } from "react";
import TableBarang from "./TableBarang";
import {
  arrayBuffer,
  convertBufferToJson,
  isValidFormat,
} from "../utils/utility";
import { cekTarif } from "../utils/excel";

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

  // const handlePreview = async () => {
  //   setLoading(true);

  //   const result = await Promise.all(jsonData.map((row) => cekTarif(row)));
  //   setJsonData(result);
  //   setLoading(false);
  // };

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
          <button className="btn btn-active mr-5" disabled={disabled}>
            {loading ? "Mohon tunggu..." : "Cek Tarif"}
          </button>
        </div>
      </div>
      <TableBarang items={items} onDisabled={setDisabled} />
    </div>
  );
}

export default FileUpload;
