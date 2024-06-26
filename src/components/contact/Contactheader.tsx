import { FC } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactHeader: FC = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white  md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* First Row: Phone Numbers */}
        <div className="flex items-center  mb-4 md:mb-0">
          <FiPhone className="mr-2 mt-4" />
          <div>
            <p className="font-semibold  mb-4">Phone Numbers</p>
            <p>123-456-7890</p>
            <p>987-654-3210</p>
          </div>
        </div>
        {/* Second Row: Email */}
        <div className="flex items-center mb-4 md:mb-0">
          <FiMail className="mr-2 mt-12" />
          <div>
            <p className="font-semibold mb-6">Email</p>
            <p>contact@example.com</p>
          </div>
        </div>
        {/* Third Row: Office Address */}
        <div className="flex items-center">
          <FiMapPin className="mr-2 mt-4" />
          <div>
            <p className="font-semibold mb-4">Office Address</p>
            <p>123 Street Name, City</p>
            <p>Country, Postal Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
