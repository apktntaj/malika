"use client";

import React from "react";
import { arrayBuffer, convertBufferToJson } from "../utils/utility";

export default function Input({ setHsCodes }) {
  const handleChange = (e) => {
    const bufferedFile = arrayBuffer(e.target.files[0]);
    bufferedFile.then((buffer) => {
      const result = convertBufferToJson(buffer);

      setHsCodes(result);
    });
  };

  return (
    <input
      type="file"
      accept=".xlsx, .xls"
      onChange={handleChange}
      className="file-input file-input-bordered w-full lg:max-w-xs max-w-sm"
    />
  );
}
