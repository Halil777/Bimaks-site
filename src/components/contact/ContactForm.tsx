import { FC, useState } from "react";
import axios from "axios";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useTranslation } from "react-i18next";

const ContactForm: FC = () => {
  const { i18n } = useTranslation(); // Use i18n for language check

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [notification, setNotification] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    try {
      await axios.post("http://95.85.121.153:6427/send-mail", {
        to_mail: "sh.alyyew2019@gmail.com",
        username: name,
        email: email,
        subject: subject,
        text: message,
        phone: "", // Add phone if needed
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setNotification(
        i18n.language === "ru"
          ? "Сообщение успешно отправлено!"
          : "Message sent successfully!"
      );

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setNotification(
        i18n.language === "ru"
          ? "Не удалось отправить сообщение."
          : "Failed to send message."
      );
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">
          {i18n.language === "ru" ? "Напишите нам" : "Write Us"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              {i18n.language === "ru" ? "Имя" : "Name"}:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              {i18n.language === "ru" ? "Электронная почта" : "Email"}:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              {i18n.language === "ru" ? "Тема" : "Subject"}:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              {i18n.language === "ru" ? "Сообщение" : "Message"}:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {i18n.language === "ru" ? "Отправить" : "Submit"}
          </button>
        </form>
        {notification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded-md shadow-md">
            {notification}
          </div>
        )}
      </div>
      {/* Right Side: Map */}
      <div className="w-full md:w-1/2 p-4">
        <YMaps>
          <Map
            defaultState={{ center: [37.900759, 58.35373], zoom: 17.39 }}
            style={{ width: "100%", height: "400px" }}
          >
            <Placemark geometry={[37.900759, 58.35373]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default ContactForm;
