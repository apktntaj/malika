"use client";

import React, { useState } from "react";
import Input from "../ui/Input";

export default function InputPage() {
  const [str, setStr] = useState("Belum ada bos");

  const handleChange = (e) => setStr(e.target.value);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <Input text={str} />
    </div>
  );
}
