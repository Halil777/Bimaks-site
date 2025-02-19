import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import FooterLogo from "./FooterLogo";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-8 px-[5%] py-8">
        <div className="flex justify-center md:justify-start">
          <FooterLogo />
        </div>

        <div className="flex flex-col gap-2 md:gap-4 md:text-center md:col-span-1">
          <h1 className="text-white text-xl md:text-2xl">
            {t("footer.contact")}
          </h1>
          <p className="text-white">{t("footer.phone")}: +993 64550330</p>
          <p className="text-white">{t("footer.email")}: info@bimakstm.com</p>
          <p className="text-white">{t("footer.fax")}: +993 64550330</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-4 md:text-center md:col-span-1">
          <h1 className="text-white text-xl md:text-2xl">
            {t("footer.location")}
          </h1>
          <p className="text-white">{t("footer.address")}</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-10">
        <a
          href="skype:8047ca22572d39a4?chat"
          className="text-gray-300 hover:text-white hover:bg-blue-900 rounded-full p-2 transition-colors duration-300"
          title={t("Skype")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialSkypeOutline size={24} />
        </a>
        <a
          href="https://wa.me/99364550330"
          className="text-gray-300 hover:text-white hover:bg-blue-600 rounded-full p-2 transition-colors duration-300"
          title={t("Whatsapp")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.instagram.com/invites/contact/?igsh=2iype7772yp7&utm_content=vyhkiqz"
          className="text-gray-300 hover:text-white hover:bg-pink-500 rounded-full p-2 transition-colors duration-300"
          title={t("Instagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://t.me/garadurdyev"
          className="text-gray-300 hover:text-white hover:bg-blue-800 rounded-full p-2 transition-colors duration-300"
          title={t("Telegram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiTelegramLogoDuotone size={24} />
        </a>
      </div>

      <div className="air air1">
        <div className="flex flex-col-reverse gap-3 items-center absolute bottom-3 w-full justify-end right-0 ">
          <h1 className="text-xl">{t("footer.poweredBy")}</h1>
          <img src="/logo/GeekSpaceLogo.svg" alt="GeekSpaceLogo" />
        </div>
      </div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </section>
  );
};

export default Footer;
