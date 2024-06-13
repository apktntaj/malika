import Hero from "./ui/Hero";

const title = "Enhance Your Business Efficiency with Us";
const subtitle =
  "Experience the future of business operations with our state-of-the-art automation and CRM solutions. Our platform is designed to streamline your workflows, boost productivity, and foster stronger customer relationships. From automating repetitive tasks to providing deep insights into customer interactions, our tools empower your team to work smarter, not harder. Unlock unprecedented efficiency and elevate your business to new heights with our innovative technology.";

export default function Home() {
  return (
    <>
      <Hero title={title} subtitle={subtitle} />
    </>
  );
}
