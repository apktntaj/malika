import ActionTableWrapper from "./ui/FileReaderWrapper";
import Title from "./ui/Title";

const HomePage = () => {
  return (
    <div className="container">
      <Title
        className="text-center"
        title="Aplikasi yang memindai file excel dan akan menampilkan data yang sesuai dengan format HS Code."
      />
    </div>
  );
};

export default HomePage;
