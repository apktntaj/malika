"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import TableBarang from "./TableBarang";
import { cekTarif } from "../utils/excel";

function FileUpload() {
  const [message, setMessage] = useState("");
  const [isFile, setIsFile] = useState(false);
  const [jsonData, setJsonData] = useState();

  let data;

  //   console.log(jsonData);
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const selectedFile = e.target.result;
      const workbook = XLSX.read(selectedFile, { type: "binary" });

      // Mengambil nama sheet pertama
      const sheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[sheetName];

      // Konversi sheet ke JSON
      const json = XLSX.utils.sheet_to_json(workSheet);
      data = json;

      //   Fetch data berdasarkan info dari file Excel
      // const fetchedData = await fetchDataBasedOnExcel(json);

      // Tambahkan data yang sudah di-fetch ke file Excel
      //   const updatedWorkbook = updateWorkbookWithFetchedData(
      //     workbook,
      //     fetchedData
      //   );

      // Export file Excel yang sudah diperbarui
      //   exportWorkbook(updatedWorkbook);
    };

    reader.readAsArrayBuffer(file);
  };

  const handlePreview = async () => {
    const result = await Promise.all(data.map((row) => cekTarif(row)));

    setJsonData(result);
  };

  // Selesai disini

  const fetchDataBasedOnExcel = async (json, cb) => {
    // Contoh fetch data dari API

    const fetchedData = await Promise.all(
      json.map(async (row) => {
        const response = await fetch(
          `https://api.insw.go.id/api-prod-ba/ref/hscode/komoditas?hs_code=${row["HS CODE"]}`
        );
        const data = await response.json();
        return { ...row, fetchedData: data };
      })
    );

    return fetchedData;
  };

  const updateWorkbookWithFetchedData = (workbook, fetchedData) => {
    const newSheet = XLSX.utils.json_to_sheet(fetchedData);
    workbook.Sheets[workbook.SheetNames[0]] = newSheet;
    return workbook;
  };

  const exportWorkbook = (workbook) => {
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "updated_file.xlsx";
    link.click();
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  return (
    <div className="container px-5 flex flex-col gap-2 mt-5">
      <input
        type="file"
        accept=".xlsx, .xls"
        className="file-input w-full max-w-xs"
        onChange={handleChange}
      />

      <button onClick={handlePreview} className="btn btn-active">
        Preview
      </button>
      <button className="btn btn-active btn-neutral">Download File</button>

      <TableBarang rowsBarang={jsonData} />
      <pre>{jsonData && JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
}

export default FileUpload;
