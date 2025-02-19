import { FC } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const certificates = [
  "/images/Halal Certificate.be35dd6e (1).png",
  "/images/ISO 9001.8661a8d0.png",
  "/images/ISO 14001.086798fe.png",
  "/images/nfs.320f2461.png",
];

interface CertificatesCardProps {
  certificate: string;
  delay: number;
  duration: number;
}

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const CertificatesCard: FC<CertificatesCardProps> = ({
  certificate,
  delay,
  duration,
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("left", "spring", delay, duration)}
        initial="hidden"
        animate="show"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-between items-center flex-col">
          <div className="group relative">
            <img
              src={certificate}
              alt="certificate"
              className="w-72 h-72 object-contain shadow-2xl transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certificates: FC = () => {
  const animationTimings = [
    { delay: 0.8, duration: 1 },
    { delay: 1.3, duration: 2.2 },
    { delay: 2.5, duration: 3.4 },
    { delay: 3.7, duration: 4.6 },
  ];

  return (
    <div className="container mx-auto py-8">
      <p className="dark:text-gray-300 text-[40px] text-center mb-10">
        Our Certificates
      </p>
      <div className="flex flex-wrap justify-center">
        {certificates.slice(0, 3).map((cert, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4">
            <CertificatesCard
              certificate={cert}
              delay={animationTimings[index].delay}
              duration={animationTimings[index].duration}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full sm:w-1/3 p-4">
          <CertificatesCard
            certificate={certificates[3]}
            delay={animationTimings[3].delay}
            duration={animationTimings[3].duration}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
