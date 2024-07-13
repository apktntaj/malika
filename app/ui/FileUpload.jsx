"use client";

import React, { isValidElement, useState } from "react";
import TableBarang from "./TableBarang";
import {
  arrayBuffer,
  convertBufferToJson,
  dataInsw,
  isValidFormat,
} from "../utils/utility";

function FileUpload() {
  const [jsonData, setJsonData] = useState();
  const [loading, setLoading] = useState(false);
  const [fetchable, setFetchable] = useState(false);

  const handleChange = async (event) => {
    setFetchable(true);
    const bufferedFile = await arrayBuffer(event.target.files[0]);
    const items = convertBufferToJson(bufferedFile);

    const isListOfHSCodeValid = items.every(
      (item) => item["HS Code"].length === 8 && /^\d+$/.test(item["HS Code"])
    );

    if (!isListOfHSCodeValid) {
      alert("Ada beberapa HS Code yang tidak valid (Cek yang berwarna merah");
      setFetchable(false);
    }
    setJsonData(items);
  };

  const handlePreview = async () => {
    setLoading(true);

    const result = await Promise.all(jsonData.map((row) => dataInsw(row)));
    setJsonData(result);
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
            onClick={handlePreview}
            className="btn btn-active mr-5"
            disabled={!fetchable}
          >
            {loading ? "Mohon tunggu..." : "Cek Tarif"}
          </button>
        </div>
      </div>
      <TableBarang rowsBarang={jsonData} />
    </div>
  );
}

export default FileUpload;
