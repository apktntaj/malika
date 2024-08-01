"use client";

import React, { useState } from "react";

import Actions from "./Actions";
import Table from "./Table";
import { inswData } from "../utils/excel";

export default function FileReaderWrapper() {
  const [dataHsCodes, setDataHsCodes] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const fetchHsCodes = async () => {
    const uniqueHsCodes = [
      ...new Set(dataHsCodes.map((item) => item["HS CODE"])),
    ];
    const fetchedUniqueHsCodes = await Promise.allSettled(
      uniqueHsCodes.map((hsCode) => inswData(hsCode))
    );
    console.log(Object.values(fetchedUniqueHsCodes));
  };

  return (
    <>
      <Actions
        onChangeFile={setDataHsCodes}
        fetchable={disabled}
        onCheckTarifClick={fetchHsCodes}
      />
      <Table data={dataHsCodes} setDisabled={setDisabled} />
    </>
  );
}
