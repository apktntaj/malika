import { dataINSW } from "../utils/inswScraper";

const TableItemBarang = async () => {
  const data = await dataINSW();
  console.log(data);
  return <div>{"hello"}</div>;
};

export default TableItemBarang;
