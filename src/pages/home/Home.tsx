import { FC } from "react";
// import MyDocument from "../../components/home/MyDocument";
// import { PDFViewer } from "@react-pdf/renderer";
// import Certificates from "../certificates/Certificates";
// import Events from "../../components/home/Events";
import HomeHero from "../../components/home/HomeHero";
import HomeProducts from "../../components/home/HomeProducts";
import HomeAbout from "./HomeAbout";
import HomeCertificates from "./HomeCertificates";

const Home: FC = () => {
  return (
    <div>
      <HomeHero />
      <div className="px-[10%]">
        <HomeProducts />
        {/* <PDFViewer>
          <MyDocument />
        </PDFViewer> */}
        <HomeAbout />
        {/* <Certificates /> */}
        {/* <Events /> */}

        <HomeCertificates />
      </div>
    </div>
  );
};

export default Home;
