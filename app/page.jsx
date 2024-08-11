import ActionTableWrapper from "./ui/FileReaderWrapper";
import Title from "./ui/Title";

const HomePage = () => {
  return (
    <div className="container">
      <Title title="Cek Tarif HS Codes" />
      <ActionTableWrapper />
    </div>
  );
};

export default HomePage;
