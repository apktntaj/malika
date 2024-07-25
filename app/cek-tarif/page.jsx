import FileUpload from "../ui/FileUpload";

const ExcelPage = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-extrabold text-gray-600 text-center mb-6">
        Harmonized System Checker
      </h1>

      <p className="text-center text-slate-600">
        Unduh contoh berkas excel di
        <a
          className="text-blue-600-500 font-semibold drop-shadow-md tracking-wider"
          href="template.xlsx"
          download
        >
          {" "}
          sini
        </a>
      </p>
      <FileUpload />
    </div>
  );
};

export default ExcelPage;
