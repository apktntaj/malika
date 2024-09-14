import { hsCodeFormat, isValidFormat } from "../utils/utility";

export default function Row({ rowCells }) {
  return rowCells.map((row, idx) => {
    return (
      <td className="px-4" key={idx}>
        {row ? (isValidFormat(row) ? hsCodeFormat(row) : row) : "null"}
      </td>
    );
  });
}
