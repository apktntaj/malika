import Hero from "./ui/Hero";

const title = "Submit then you find it.";
const subtitle =
  "Rayefy akan membantu anda menyederhanakan proses pembuatan dokumen pabeanmu. Hidup terlalu singkat untuk mengerjakan pekerjaan yang repetitif.";

export default function Home() {
  return (
    <>
      <Hero title={title} subtitle={subtitle} />
    </>
  );
}
