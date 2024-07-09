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
            {rowsBarang
              ? rowsBarang.map((rows, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <th
                      className={`${
                        rows["HS Code"].length !== 8
                          ? "text-red-500 font-extrabold"
                          : ""
                      }`}
                    >
                      {rows["HS Code"].length !== 8
                        ? "INVALID HS CODE"
                        : rows["HS Code"]}
                    </th>
                    <th>{rows["BM"]}</th>
                    <th>{rows["PPN"]}</th>
                    <th>{rows["PPH"]}</th>
                    <th>{rows["lartas_import"]}</th>
                    <th>{rows["lartas_border"]}</th>
                    <th>{rows["lartas_post_border"]}</th>
                    <th>{rows["lartas_export"]}</th>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBarang;
