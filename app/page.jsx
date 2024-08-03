import Hero from "./ui/Hero";

const title = "Solusi untuk semua kebutuhan pabean.";
const subtitle =
  "Rayefy akan membantu anda menyederhanakan proses pembuatan dokumen pabeanmu. Daftar sekarang dan nikmati layanan kami secara gratis untuk pertama kali.";

export default function Home() {
  return (
    <>
      <Hero title={title} subtitle={subtitle} />
    </>
  );
}
