"use client";

import React from "react";
import {
  arrayBuffer,
  convertBufferToJson,
  isValidFormat,
} from "../utils/utility";

export default function Input({ setHsCodes }) {
  const handleChange = (e) => {
    const bufferedFile = arrayBuffer(e.target.files[0]);
    bufferedFile.then((buffer) => {
      const result = convertBufferToJson(buffer);

      const cleanedResult = result
        .filter((arr) => arr.length !== 0)
        .map((arr) => arr.filter((val) => isValidFormat(val)))
        .reduce((arr1, arr2) => arr1.concat(arr2));

      setHsCodes(cleanedResult);
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
