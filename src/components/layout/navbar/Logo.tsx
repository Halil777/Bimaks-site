import { FC } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "/logo/biMaksLogo.svg";

const Logo: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex flex-col items-start gap-1 cursor-pointer"
    >
      {/* <h1 className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['poppins']">
        bimaks
      </h1> */}
      <img src="/logo/bimaks-logo.png" style={{ width: "130px" }} alt="" />
      <p
        style={{ color: "#7D93DC" }}
        className=" text-xs sm:text-sm md:text-base lg:text-lg mt-[-2px] sm:mt-[-4px] md:mt-[-6px] lg:mt-[-8px]"
      >
        TURKMENISTAN
      </p>
    </div>
  );
};

export default Logo;
