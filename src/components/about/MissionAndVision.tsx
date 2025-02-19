import { FC } from "react";
import { useTranslation } from "react-i18next";

const MissionAndVision: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto mt-10">
        <h3 className="text-3xl font-bold leading-[50px] dark:text-gray-500">
          {t("about.ourMission")}
        </h3>
        <p className="leading-9 dark:text-gray-500">
          {t("about.ourMissionText")}
        </p>
      </div>
      <div className="container mx-auto mt-10">
        <h3 className="text-3xl font-bold leading-[50px] dark:text-gray-500">
          {t("about.ourVision")}
        </h3>
        <p className="leading-9 dark:text-gray-500">
          {t("about.ourVisionText")}
        </p>
      </div>
    </>
  );
};

export default MissionAndVision;
