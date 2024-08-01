import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Actions({
  onChangeFile,
  fetchable,
  onCheckTarifClick,
}) {
  return (
    <div className="container px-2 md:flex md:justify-between md:items-center">
      <Input setHsCodes={onChangeFile} />
      <div className="mt-3 flex gap-4">
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
