import { isValidFormat } from "../utils/utility";

const TableBarang = ({ rowsBarang }) => {
  return (
    <>
      <div className="overflow-x-auto overflow-y-scroll h-96">
        <table className="table table-zebra table-pin-rows">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>NO</th>
              <th>HS CODE</th>
              <th>BM</th>
              <th>PPN</th>
              <th>PPH</th>
              <th>LARTAS IMPORT</th>
              <th>LARTAS BORDER</th>
              <th>LARTAS POST BORDER</th>
              <th>LARTAS EKSPORT</th>
            </tr>
          </thead>
          <tbody>
            {rowsBarang ? (
              rowsBarang.map((row, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td
                    className={`text-center ${
                      isValidFormat(row["HS Code"]) ? "" : "text-red-500"
                    }`}
                  >
                    {row["HS Code"]}
                  </td>
                  <td>{row["BM"]}</td>
                  <td>{row["PPN"]}</td>
                  <td>{row["PPH"]}</td>
                  <td>{row["lartas_import"]}</td>
                  <td>{row["lartas_border"]}</td>
                  <td>{row["lartas_post_border"]}</td>
                  <td>{row["lartas_export"]}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <th>#</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBarang;
