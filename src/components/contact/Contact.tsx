import { FC, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import axios from "axios";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    theme: "",
    message: "",
  });

  const [notification, setNotification] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://95.85.121.153:6427/send-mail", {
        to_mail: "info@bimakstm.com",
        username: formData.fullname,
        email: formData.email,
        subject: formData.theme,
        text: formData.message,
        phone: "",
      });
      setFormData({
        fullname: "",
        email: "",
        theme: "",
        message: "",
      });

      setNotification("Message sent successfully!!!");
    } catch (error) {
      console.log("Error sending message: " + error);
      setNotification("Failed to send message");
    }

    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div className="relative">
      <div className="absolute top-[20%] right-[5%] z-10 w-full">
        <motion.form
          variants={fadeIn("right", "spring", 0.1, 1)}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-4 rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-gray-700 dark:text-gray-100 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-100 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="theme"
              className="block text-gray-700 dark:text-gray-100 font-bold mb-2"
            >
              Theme
            </label>
            <input
              type="text"
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold dark:text-gray-100 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
          </div>

          <div>
            <ScrollAnimation animateIn="animateIn">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </ScrollAnimation>
          </div>
        </motion.form>
      </div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-xl">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Contact;
