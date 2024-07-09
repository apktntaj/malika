import FileUpload from "../ui/FileUpload";

const ExcelPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-600 text-center mb-6">
        Harmonized System Checker
      </h1>
      <div className="text-center mb-8">
        <p>
          This app will check the list of HS Codes on the
          <a href="https://insw.go.id/intr"> INSW</a> website then provide you
          with the corresponding taxes and regulations for each HS Code.
        </p>
        <p>
          Life is too short to do repetitive and boring tasks. By using this
          app, you'll have more spare time to focus on other strategic tasks.
        </p>
        <p className="text-red-500">
          Please consider to use desktop screen for better table display.
        </p>
      </div>
      <p className="text-center text-slate-600 -mt-2 pl-1">
        Download template file excel di
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
