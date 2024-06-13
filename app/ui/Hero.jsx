import Image from "next/image";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="px-10 lg:-mt-10 hero min-h-screen flex justify-evenly items-center">
      <div className="hero-content text-center lg:text-left">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          <div className="flex gap-3 justify-center">
            <button className="btn btn-accent">Sign Up</button>
            <button className="btn btn-success">Login</button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={"vercel.svg"}
          width={500}
          height={500}
          className="hidden lg:block -mt-16"
        />
      </div>
    </div>
  );
};

export default Hero;
