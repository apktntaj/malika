import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-10 h-[250px] bg-lime-200">
      <div className="w-3/5">
        <h1 className="text-2xl font-bold">Modules Generator</h1>
        <p className="mt-5 pr-10">
          Module Generator is an online document generator for Exhibition
          purpose only. Thanks to our advanced conversion technology the quality
          of the output will be as good as if the file was serve by CEISA 4.0.
        </p>
      </div>
      <div className="image">
        <Image
          className="inset-0"
          src="vercel.svg"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Hero;
