import Hero from "./ui/Hero";

const title = "Selasaikan dokumen pabeanmu dalam menit.";
const subtitle =
  "Malika akan membantu anda menyelesaikan problem pabean kamu dengan cepat. Hidup terlalu singkat untuk mengerjakana pekerjaan repetitif. Biar kami yang melakukannya.";

export default function Home() {
  return (
    <>
      <Hero title={title} subtitle={subtitle} />
    </>
  );
}
