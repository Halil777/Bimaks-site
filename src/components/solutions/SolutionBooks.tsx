import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRegFilePdf } from "react-icons/fa";

const SolutionBooks = () => {
  const { i18n } = useTranslation();

  const download = (fileName: string) => {
    window.open(`/books/${fileName}`, "_blank");
  };

  const roSystem = () => {
    switch (i18n.language) {
      case "en":
        return "CONTROL LIST OF RO SYSTEMS";
      case "ru":
        return "КОНТРОЛЬНЫЙ СПИСОК RO СИСТЕМ";
      case "tm":
        return "CONTROL LIST OF RO SYSTEMS";
      default:
        return "CONTROL LIST OF RO SYSTEMS";
    }
  };

  const coolingSystem = () => {
    switch (i18n.language) {
      case "en":
        return "CONTROL LIST OF COOLING SYSTEMS";
      case "ru":
        return "КОНТРОЛЬНЫЙ ПЕРЕЧЕНЬ СИСТЕМ ОХЛАЖДЕНИЯ";
      case "tm":
        return "CONTROL LIST OF COOLING SYSTEMS";
      default:
        return "CONTROL LIST OF COOLING SYSTEMS";
    }
  };

  const boilerControllist = () => {
    switch (i18n.language) {
      case "en":
        return "BOILER CONTROLLIST";
      case "ru":
        return "КОНТРОЛЛЛИСТ КОТЛА";
      case "tm":
        return "BOILER CONTROLLIST";
      default:
        return "BOILER CONTROLLIST";
    }
  };

  return (
    <div className="flex mt-3 mb-16 overflow-x-auto">
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-shrink-0 lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full p-4"
      >
        <div className="rounded-lg gap-5 p-6 flex flex-col justify-center items-center">
          <div className="text-4xl bg-blue-500 w-20 flex items-center justify-center h-20 rounded-full text-white mb-4">
            <FaRegFilePdf />
          </div>
          <h2 className="text-lg font-bold text-center h-[70px]">
            {roSystem()}
          </h2>
        </div>
        <div className="flex justify-center">
          <button
            className="text-blue-500 font-bold px-4 rounded-md"
            onClick={() => download("checklist RO_ru.pdf")}
          >
            {i18n.language === "ru" ? "Скачать" : "Download"}
          </button>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="flex-shrink-0 lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full p-4"
      >
        <div className="rounded-lg p-6 gap-5 flex flex-col justify-center items-center">
          <div className="text-4xl bg-blue-500 w-20 flex items-center justify-center h-20 rounded-full text-white mb-4">
            <FaRegFilePdf />
          </div>
          <h2 className="text-lg font-bold text-center h-[70px]">
            {coolingSystem()}
          </h2>
        </div>
        <div className="flex justify-center">
          <button
            className="text-blue-500 font-bold px-4 rounded-md"
            onClick={() => download("checklist cooling_ru.pdf")}
          >
            {i18n.language === "ru" ? "Скачать" : "Download"}
          </button>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="flex-shrink-0 lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full p-4"
      >
        <div className="rounded-lg p-6 flex flex-col gap-5 justify-center items-center">
          <div className="text-4xl bg-blue-500 w-20 flex items-center justify-center h-20 rounded-full text-white mb-4">
            <FaRegFilePdf />
          </div>
          <h2 className="text-lg font-bold text-center h-[70px]">
            {boilerControllist()}
          </h2>
        </div>
        <div className="flex justify-center">
          <button
            className="text-blue-500 font-bold px-4 rounded-md"
            onClick={() => download("checklist boiler_ru.pdf")}
          >
            {i18n.language === "ru" ? "Скачать" : "Download"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionBooks;
