import { isValidFormat } from "../utils/utility";
import Alert from "./Alert";

const TableBarang = ({ items, onDisabled }) => {
  const isEmpty = items.length === 0;

  if (isEmpty) {
    onDisabled(true);
    return <Alert message="File yang diunggah kosong." />;
  }

  const keys = Object.keys(items[0]);
  const isTemplated = keys[0] === "HS Code" && keys.length === 1;

  if (!isTemplated) {
    onDisabled(true);
    return (
      <Alert message="Format tidak sesuai. Silakan unggah file dengan menggunakan template yang telah disediakan." />
    );
  }

  onDisabled(false);

  const header = keys.map((key, idx) => <th key={idx}>{key}</th>);

  const row = items.map((item, idx) => {
    const values = Object.values(item);

    return (
      <tr key={idx}>
        {values.map((value, idx) => (
          <td key={idx}>{value}</td>
        ))}
      </tr>
    );
  });

  return (
    <>
      <div className="overflow-x-auto overflow-y-scroll h-96">
        <table className="table table-zebra table-pin-rows text-center">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">{header}</tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    </>
  );
};

export default TableBarang;
