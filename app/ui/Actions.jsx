import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Actions({
  onChangeFile,
  fetchable,
  onButtonClick,
  downloadAble,
}) {
  return (
    <div className="container space-y-2 p-4 md:flex md:justify-between md:items-center">
      <Input setHsCodes={onChangeFile} />
      <Button
        children="Tarik data"
        isDisabled={fetchable}
        isDownload={downloadAble}
        onHandleClick={onButtonClick}
      />
    </div>
  );
}
