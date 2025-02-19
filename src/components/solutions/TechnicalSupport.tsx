import { useTranslation } from "react-i18next";
import SolutionBooks from "./SolutionBooks";

const TechnicalSupport = () => {
  const { i18n } = useTranslation();

  const title1ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Are you looking for technical support ?";
      case "ru":
        return "Вы ищете техническую поддержку?";
      case "tm":
        return "Are you looking for technical support ?";
      default:
        return "Are you looking for technical support ?";
    }
  };

  const subtitleByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "An order to help you better, please indicate your water treatment system and fill in the following forms and send it to info@bimakstm.com";
      case "ru":
        return "Для того, чтобы помочь вам лучше, пожалуйста, укажите вашу систему очистки воды, заполните следующие формы и отправьте их на адрес info@bimakstm.com";
      case "tm":
        return "An order to help you better, please indicate your water treatment system and fill in the following forms and send it to info@bimakstm.com";
      default:
        return "An order to help you better, please indicate your water treatment system and fill in the following forms and send it to info@bimakstm.com";
    }
  };

  return (
    <div className="dark:text-black">
      <h1 className="text-3xl text-center font-bold">{title1ByLanguage()}</h1>
      <p className="text-center leading-10 mt-6 text-xl">
        {subtitleByLanguage()}
      </p>
      <SolutionBooks />
    </div>
  );
};

export default TechnicalSupport;
