// HeroSocial Component

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
export const HeroSocial = () => {
  const socialLinks = [
    {
      icon: BsLinkedin,
      url: "https://www.linkedin.com/in/nrshakib/",
      color: "hover:text-blue-500",
    },
    {
      icon: BsGithub,
      url: "https://github.com/nrshakib",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <motion.div
      className="flex flex-row sm:flex-col gap-4 sm:gap-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon />
        </motion.a>
      ))}
      <motion.div
        className="hidden sm:block w-px h-20 bg-gradient-to-b from-gray-600 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 1, delay: 1.8 }}
      />
    </motion.div>
  );
};
