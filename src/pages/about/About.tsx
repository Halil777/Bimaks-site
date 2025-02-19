import { FC } from "react";
import AboutUs from "../../components/about/AboutUs";
import HomeHero from "../../components/home/HomeHero";

const About: FC = () => {
  return (
    <>
      {/* <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/i (2).webp')" }}
      ></div> */}
      <HomeHero />
      <div className="mt-24 mb-24 pl-[10%] pr-[10%]">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full">
            <AboutUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
