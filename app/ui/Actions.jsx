import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Actions({
  onChangeFile,
  fetchable,
  onCheckTarifClick,
}) {
  return (
    <div className="container p-4 flex flex-col gap-2 md:flex-row justify-between items-center">
      <Input setHsCodes={onChangeFile} />
      <div className="flex gap-3">
        <Button
          variant="primary"
          children="Cek Tarif"
          isDisabled={fetchable}
          onHandleClick={onCheckTarifClick}
        />
        <Button variant="accent" children="Unduh File" />
      </div>
    </div>
  );
}
