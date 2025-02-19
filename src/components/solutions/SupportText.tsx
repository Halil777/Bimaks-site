import { useTranslation } from "react-i18next";

const SupportText = () => {
  const { i18n } = useTranslation();

  const titleByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "TECHNICAL SUPPORT";
      case "ru":
        return "ТЕХНИЧЕСКАЯ ПОДДЕРЖКА";
      case "tm":
        return "TECHNICAL SUPPORT";
      default:
        return "TECHNICAL SUPPORT";
    }
  };

  const subtitleByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "BIMAKS’s Technical Assistance department aims to provide you with themost efficient solutions.";
      case "ru":
        return "Целью отдела технической поддержки BIMAKS является предоставление вам наиболее эффективные решения.";
      case "tm":
        return "BIMAKS’s Technical Assistance department aims to provide you with themost efficient solutions.";
      default:
        return "BIMAKS’s Technical Assistance department aims to provide you with themost efficient solutions.";
    }
  };

  const subtitle1ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Thanks to the technical experience and knowledge of BİMAKS,";
      case "ru":
        return "Благодаря техническому опыту и знаниям BIMAKS,";
      case "tm":
        return "Thanks to the technical experience and knowledge of BİMAKS,";
      default:
        return "Thanks to the technical experience and knowledge of BİMAKS,";
    }
  };

  const subtitle2ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "our customers can direct them to the most effective and";
      case "ru":
        return "наши клиенты могут направить их к наиболее эффективному и";
      case "tm":
        return "our customers can direct them to the most effective and";
      default:
        return "our customers can direct them to the most effective and";
    }
  };

  const subtitle3ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "sustainable solutions in order to overcome their problems.";
      case "ru":
        return "устойчивые решения для преодоления своих проблем.";
      case "tm":
        return "sustainable solutions in order to overcome their problems.";
      default:
        return "sustainable solutions in order to overcome their problems.";
    }
  };

  const subtitle4ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Our customers send their completed checklist forms to our Technical Support Unit and then we analyze the system data from our customers using the BASP (Bimaks Antiscalant Software Program) software program. As a result, our software program calculates the optimal dosage requirement for the specific chemicals to be used within the system, indicating which product will best suit these requirements";
      case "ru":
        return "Наши клиенты отправляют заполненные формы контрольных списков в нашу группу технической поддержки, а затем мы анализируем системные данные наших клиентов с помощью программного обеспечения BASP (Bimaks Antiscalant Software Program). В результате наша программа рассчитывает оптимальную дозировку конкретных химикатов, которые будут использоваться в системе, и указывает, какой продукт лучше всего соответствует этим требованиям.";
      case "tm":
        return "Our customers send their completed checklist forms to our Technical Support Unit and then we analyze the system data from our customers using the BASP (Bimaks Antiscalant Software Program) software program. As a result, our software program calculates the optimal dosage requirement for the specific chemicals to be used within the system, indicating which product will best suit these requirements";
      default:
        return "Our customers send their completed checklist forms to our Technical Support Unit and then we analyze the system data from our customers using the BASP (Bimaks Antiscalant Software Program) software program. As a result, our software program calculates the optimal dosage requirement for the specific chemicals to be used within the system, indicating which product will best suit these requirements";
    }
  };

  return (
    <div className="bg-blue-400 py-10 px-5 text-center  text-white">
      <h1 className="text-2xl font-bold ">{titleByLanguage()}</h1>
      <p className="my-6">{subtitleByLanguage()}</p>
      <div className="flex flex-col gap-3 mt-7 text-[17px] leading-7">
        <p>{subtitle1ByLanguage()}</p>
        <p>{subtitle2ByLanguage()}</p>
        <p>{subtitle3ByLanguage()}</p>
        <p className="leading-10 mt-3">{subtitle4ByLanguage()}</p>
      </div>
    </div>
  );
};

export default SupportText;
