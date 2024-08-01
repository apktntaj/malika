import FileReaderWrapper from "../ui/FileReaderWrapper";
import Title from "../ui/Title";

const CekTarifPage = () => {
  return (
    <div className="container">
      <Title title="Cek Tarif HS Codes" />
      <p className="text-center text-slate-600">
        Unduh contoh file Excel di
        <a
          className="text-blue-600-500 font-semibold drop-shadow-md tracking-wider"
          href="cek-tarif.xlsx"
          download
        >
          {" "}
          sini
        </a>
      </p>
      <FileReaderWrapper />
    </div>
  );
};

export default CekTarifPage;
