import React from "react";

export default function TemplateExcelLink() {
  return (
    <p className="text-center text-slate-600 font-bold text-xl mt-10">
      Unduh contoh file Excel di
      <a
        className="text-secondary tracking-wider"
        href="cek-tarif.xlsx"
        download
      >
        {" "}
        sini
      </a>
    </p>
  );
}
