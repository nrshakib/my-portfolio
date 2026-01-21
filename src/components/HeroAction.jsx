// HeroAction Component

import { motion } from "framer-motion";
export const HeroAction = () => {
  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
      <motion.button
        onClick={() =>
          handleDownload("/resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="h-10 bg-blue-400 text-white rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 w-full "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.button>

      <motion.button
        onClick={() =>
          handleDownload("/resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="h-10 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 w-full "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.button>

      <motion.button
        onClick={scrollToContact}
        className="h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Have a Talk
      </motion.button>
    </div>
  );
};
