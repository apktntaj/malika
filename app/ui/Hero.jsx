import Image from "next/image";
import Link from "next/link";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="px-2 lg:-mt-[110px] hero min-h-screen flex justify-around items-center">
      <div className="flex flex-col hero-content text-center lg:text-left">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
        </div>
      </div>

      <Image
        src={"/logo.png"}
        width={450}
        height={450}
        className="hidden lg:block -mt-16"
      />
    </div>
  );
};

export default Hero;
