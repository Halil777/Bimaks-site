import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomeAbout: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAboutClick = () => {
    navigate("/about");
  };
  // [7757] - BIMAKS WEB SITE FRONT

  return (
    <div className="px-[5%] md:px-[10%] py-[5%] mt-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src="/logo/photo_2024-08-15_17-14-45.jpg"
            alt="Logo"
            className="w-full h-56 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center dark:text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("home.awtTitle")}
          </h2>
          <p className="text-base mb-6">{t("home.awtText1")}</p>
          <p className="text-base mb-6">{t("home.awtText2")}</p>
          <button
            onClick={handleAboutClick}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t("nav.about")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
