"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import TableBarang from "./TableBarang";
import { cekTarif } from "../utils/excel";
import { arrayBuffer } from "../utils/utility";

function FileUpload() {
  const [jsonData, setJsonData] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = async (event) => {
    const bufferedFile = await arrayBuffer(event.target.files[0]);
    const workbook = XLSX.read(bufferedFile, { type: "binary" });

    // Mengambil nama sheet pertama
    const sheetName = workbook.SheetNames[0];
    const workSheet = workbook.Sheets[sheetName];

    // Konversi sheet ke JSON
    const json = XLSX.utils.sheet_to_json(workSheet);
    setJsonData(json);
  };

  const handlePreview = async () => {
    setLoading(true);
    const result = await Promise.all(jsonData.map((row) => cekTarif(row)));
    setJsonData(result);
    setLoading(false);
  };

  return (
    <div className="container px-5 flex flex-col gap-2 mt-5">
      <div className="flex justify-between">
        <input
          type="file"
          accept=".xlsx, .xls"
          className="file-input w-full max-w-xs"
          onChange={handleChange}
        />
        <div>
          <button onClick={handlePreview} className="btn btn-active mr-5">
            {loading ? "Mohon tunggu..." : "Cek Tarif"}
          </button>
        </div>
      </div>
      <span className="text-sm text-slate-600 -mt-2 pl-1">
        Download template di{" "}
        <a className="text-xl tracking-wider" href="template.xlsx" download>
          sini
        </a>
      </span>
      <TableBarang rowsBarang={jsonData} />
    </div>
  );
}

export default FileUpload;
