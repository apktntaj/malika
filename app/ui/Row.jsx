import React from "react";
import { isNotValidFormat } from "../utils/utility";

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
              {item}
            </td>
          ))}
        </>
      );
    default:
      return null;
  }
}
