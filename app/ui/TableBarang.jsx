import { isNotValidFormat } from "../utils/utility";
import Alert from "./Alert";
import Row from "./Row";

const TableBarang = ({ items, onDisabled }) => {
  const isEmpty = items.length === 0;
  if (isEmpty) {
    onDisabled(true);
    return <Alert message="Data kosong." />;
  }

  const keys = Object.keys(items[0]);
  const isTemplated = keys[0] === "HS Code" && keys.length === 1;
  if (!isTemplated) {
    onDisabled(true);
    return (
      <Alert message="Format tidak sesuai. Silakan unggah file dengan menggunakan template yang telah disediakan." />
    );
  }

  const anyInvalidFormat = items.some((item) =>
    isNotValidFormat(item["HS Code"])
  );
  anyInvalidFormat ? onDisabled(true) : onDisabled(false);
  const dataItems = items.map((item, idx) => {
    const values = Object.values(item);
    return (
      <tr key={idx}>
        <Row items={values} variant={"data"} />
      </tr>
    );
  });

  return (
    <>
      <div className="overflow-x-auto overflow-y-scroll h-96">
        <table className="table table-zebra table-pin-rows text-center">
          {/* head */}
          <thead>
            <tr className="text-lg text-center">
              <Row items={keys} variant={"header"} />
            </tr>
          </thead>
          <tbody>{dataItems}</tbody>
        </table>
      </div>
    </>
  );
};

export default TableBarang;
