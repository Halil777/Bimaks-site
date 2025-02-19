import { FC, ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex min-w-full flex-auto min-h-screen">
        <div className="flex flex-col w-full">
          <Navbar />
          <div className=" mt-[3%] pt-[3.5%]">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
