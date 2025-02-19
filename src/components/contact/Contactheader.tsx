import { FC } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactHeader: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="dark:bg-gray-800 dark:text-white md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* First Row: Phone Numbers */}
        <div className="flex items-center mb-4 md:mb-0">
          <FiPhone className="mr-2 mt-10" />
          <div>
            <p className="font-semibold mb-4">
              {i18n.language === "ru" ? "Телефонные номера" : "Phone Numbers"}
            </p>
            <p>+993 64550330</p>
            {/* <p>+993 64550330</p> */}
          </div>
        </div>
        {/* Second Row: Email */}
        <div className="flex items-center mb-4 md:mb-0">
          <FiMail className="mr-2 mt-12" />
          <div>
            <p className="font-semibold mb-6">
              {i18n.language === "ru" ? "Электронная почта" : "Email"}
            </p>
            <p>info@bimakstm.com</p>
          </div>
        </div>
        {/* Third Row: Office Address */}
        <div className="flex items-center">
          <FiMapPin className="mr-2 mt-10" />
          <div>
            <p className="font-semibold mb-4">
              {i18n.language === "ru" ? "Адрес офиса" : "Office Address"}
            </p>
            <p>{t("footer.address")}</p>
            {/* <p>
              {i18n.language === "ru"
                ? "Страна, Почтовый индекс"
                : "Country, Postal Code"}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
