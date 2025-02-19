import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { PiTelegramLogoDuotone } from "react-icons/pi";

const Header: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center dark:text-white p-4 bg-transparent md:px-[10%] space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-500 dark:text-white hover:text-gray-700" />
          <span className="text-gray-700 dark:text-white hover:text-gray-900">
            +993 64550330
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-500 dark:text-white hover:text-gray-700" />
          <span className="text-gray-700 dark:text-white hover:text-gray-900">
            info@bimakstm.com
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex space-x-6">
          <TiSocialSkypeOutline className="text-gray-500 dark:text-white hover:text-gray-700" />
          <FaWhatsapp className="text-gray-500 dark:text-white hover:text-gray-700" />
          <PiTelegramLogoDuotone className="text-gray-500 dark:text-white hover:text-gray-700" />
          <FaInstagram className="text-gray-500 dark:text-white hover:text-gray-700" />
        </div>
        <div className="flex items-center space-x-4 md:pl-8">
          <img
            src="/images/ru.svg"
            alt="RU"
            width={20}
            height={20}
            className="hover:opacity-80 cursor-pointer"
            onClick={() => changeLanguage("ru")}
          />
          <img
            src="/images/uk.svg"
            alt="UK"
            width={20}
            height={20}
            className="hover:opacity-80 cursor-pointer"
            onClick={() => changeLanguage("en")}
          />
          {/* <img
            src="/images/Flag_of_Turkmenistan 1.png"
            alt="TM"
            width={20}
            height={20}
            className="hover:opacity-80 cursor-pointer"
            onClick={() => changeLanguage("tm")}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
