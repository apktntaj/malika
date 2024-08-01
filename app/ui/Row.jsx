import React from "react";
import { hsCodeFormat, isNotValidFormat } from "../utils/utility";

export default function Row({ items, variant }) {
  switch (variant) {
    case "header":
      return (
        <>
          {items.map((item, idx) => (
            <th key={idx}>{item}</th>
          ))}
        </>
      );
    case "data":
      return (
        <>
          {items.map((item, idx) => (
            <td
              className={
                idx === 0 && isNotValidFormat(item) ? "text-red-600" : ""
              }
              key={idx}
            >
              {idx === 0 ? hsCodeFormat(item) : item}
            </td>
          ))}
        </>
      );
    default:
      return null;
  }
}
