import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SolutionStepper = () => {
  const { i18n } = useTranslation();

  const title1ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Excellent Product Quality";
      case "ru":
        return "Отличное качество продукции";
      case "tm":
        return "Excellent Product Quality";
      default:
        return "Excellent Product Quality";
    }
  };

  const title2ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Fast And Reliable Service";
      case "ru":
        return "Быстрое и надежное обслуживание";
      case "tm":
        return "Fast And Reliable Service";
      default:
        return "Fast And Reliable Service";
    }
  };

  const title3ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Competitive Prices";
      case "ru":
        return "Конкурентоспособные цены";
      case "tm":
        return "Competitive Prices";
      default:
        return "Competitive Prices";
    }
  };

  const title4ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Technical Support After Sales";
      case "ru":
        return "Техническая поддержка после продажи";
      case "tm":
        return "Technical Support After Sales";
      default:
        return "Technical Support After Sales";
    }
  };

  const subtitle1ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "we are proud to supply our customers with high performance chemical products. Our products are offered with quality assurance in high-quality raw materials and production processes.";
      case "ru":
        return "мы гордимся тем, что поставляем нашим клиентам высокоэффективную химическую продукцию. Наша продукция предлагается с гарантией качества благодаря высококачественному сырью и производственным процессам.";
      case "tm":
        return "we are proud to supply our customers with high performance chemical products. Our products are offered with quality assurance in high-quality raw materials and production processes.";
      default:
        return "we are proud to supply our customers with high performance chemical products. Our products are offered with quality assurance in high-quality raw materials and production processes.";
    }
  };

  const subtitle2_1ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "carries out customer water sample analysis in its own private laboratory with short time and high accuracy. By uploading the resulting report data to our BAYP (BIMAKS Software Program) Anti-scalant system, we are able to determine the most appropriate antiscalant at the most appropriate dose. This service has proven itself to provide reliable and fast results to our customers.";
      case "ru":
        return "выполняет анализ проб воды клиента в собственной частной лаборатории в короткие сроки и с высокой точностью. Загружая полученные данные отчета в нашу систему защиты от накипи BAYP (программа BIMAKS), мы можем определить наиболее подходящий антискалант в наиболее подходящей дозе. Эта услуга зарекомендовала себя как обеспечивающая надежные и быстрые результаты для наших клиентов.";
      case "tm":
        return "carries out customer water sample analysis in its own private laboratory with short time and high accuracy. By uploading the resulting report data to our BAYP (BIMAKS Software Program) Anti-scalant system, we are able to determine the most appropriate antiscalant at the most appropriate dose. This service has proven itself to provide reliable and fast results to our customers.";
      default:
        return "carries out customer water sample analysis in its own private laboratory with short time and high accuracy. By uploading the resulting report data to our BAYP (BIMAKS Software Program) Anti-scalant system, we are able to determine the most appropriate antiscalant at the most appropriate dose. This service has proven itself to provide reliable and fast results to our customers.";
    }
  };

  const subtitle2_2ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Our technical service engineers continue to provide regular consultancy and guidance services throughout the process, including before and after the purchase.";
      case "ru":
        return "Наши инженеры по техническому обслуживанию продолжают предоставлять регулярные консультации и рекомендации на протяжении всего процесса, в том числе до и после покупки.";
      case "tm":
        return "Our technical service engineers continue to provide regular consultancy and guidance services throughout the process, including before and after the purchase.";
      default:
        return "Our technical service engineers continue to provide regular consultancy and guidance services throughout the process, including before and after the purchase.";
    }
  };

  const subtitle3ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "we always provide the most competitive prices in the market to all our small or large scale customers and ensure that they make purchases from advantageous prices throughout the year.";
      case "ru":
        return "мы всегда предоставляем самые конкурентоспособные цены на рынке для всех наших малых и крупных клиентов и гарантируем, что они совершают покупки по выгодным ценам в течение всего года.";
      case "tm":
        return "we always provide the most competitive prices in the market to all our small or large scale customers and ensure that they make purchases from advantageous prices throughout the year.";
      default:
        return "we always provide the most competitive prices in the market to all our small or large scale customers and ensure that they make purchases from advantageous prices throughout the year.";
    }
  };

  const subtitle4ByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "we always provide the most competitive prices in the market to all our small or large scale customers and ensure that they make purchases from advantageous prices throughout the year.";
      case "ru":
        return "мы всегда предоставляем самые конкурентоспособные цены на рынке для всех наших малых и крупных клиентов и гарантируем, что они совершают покупки по выгодным ценам в течение всего года.";
      case "tm":
        return "we always provide the most competitive prices in the market to all our small or large scale customers and ensure that they make purchases from advantageous prices throughout the year.";
      default:
        return "we always provide the most competitive prices in the market to all our small or large scale customers and ensure that they make purchases from advantageous prices throughout the year.";
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center dark:text-black">
      <div className="flex gap-8">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">1</div>
          </motion.div>
          <div className="w-0.5 h-32 bg-gray-300 mx-2"></div>
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">{title1ByLanguage()}</h1>
          <p className="leading-8">
            <span className="font-bold">BIMAKS </span>, {subtitle1ByLanguage()}
          </p>
        </motion.div>
      </div>
      {/* second step */}
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">2</div>
          </motion.div>
          <div className="w-0.5 h-80 bg-gray-300 mx-2"></div>
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">{title2ByLanguage()}</h1>
          <p className="leading-8">
            <span className="font-bold">BIMAKS </span> {subtitle2_1ByLanguage()}
          </p>
          <p className="leading-8">{subtitle2_2ByLanguage()}</p>
        </motion.div>
      </div>
      {/* third step */}
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">3</div>
          </motion.div>
          <div className="w-0.5 h-32 bg-gray-300 mx-2"></div>
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">{title3ByLanguage()}</h1>
          <p className="leading-8">
            <span className="font-bold">BIMAKS </span>,{subtitle3ByLanguage()}
          </p>
        </motion.div>
      </div>
      {/* fourth step */}
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">4</div>
          </motion.div>
          {/* <div className="w-0.5 h-32 bg-gray-300 mx-2"></div> */}
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">{title4ByLanguage()}</h1>
          <p className="leading-8">
            <span className="font-bold">BIMAKS </span>, {subtitle4ByLanguage()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionStepper;
