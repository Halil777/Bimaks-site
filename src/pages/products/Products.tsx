import { FC } from "react";
import HomeProducts from "../../components/home/HomeProducts";
import HomeHero from "../../components/home/HomeHero";

const Products: FC = () => {
  return (
    <>
      {/* <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/i (3).webp')" }}
      ></div> */}
      <HomeHero />
      <div className="mt-14 mb-24 pl-[10%] pr-[10%] ">
        <HomeProducts />
      </div>
    </>
  );
};

export default Products;
