import { FC } from "react";
import AboutUs from "../../components/about/AboutUs";
import Contact from "../../components/contact/Contact";

const About: FC = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/i (2).webp')" }}
      ></div>
      <div className="mt-24 mb-24  pl-[10%] pr-[10%]">
        <div className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <AboutUs />
              </div>
              <div className="md:col-span-1">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
