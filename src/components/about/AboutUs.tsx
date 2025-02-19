import { FC } from "react";
import { aboutText } from "../../data/data";
import MissionAndVision from "./MissionAndVision";
import { useTranslation } from "react-i18next";

const AboutUs: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold dark:text-gray-500">
          {t("nav.about")}
        </h1>
        {aboutText.map((item) => (
          <p className="leading-9 dark:text-gray-500" key={`about_usText`}>
            {t(item)}
          </p>
        ))}
      </div>
      <MissionAndVision />
      <div className="flex flex-col gap-8 mt-10">
        <h1 className="text-3xl font-bold leading-[50px] dark:text-gray-500">
          {t("about.safetyPolicy")}
        </h1>
        <p className="leading-9 dark:text-gray-500" key={`about_usText`}>
          {t("about.aboutText3")}
        </p>
      </div>
    </>
  );
};

export default AboutUs;
