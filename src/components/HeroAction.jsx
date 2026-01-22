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
        className="h-10 bg-blue-400 text-white rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 w-full relative overflow-hidden  cursor-pointer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.03 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">Download CV</span>
      </motion.button>

      <motion.button
        onClick={() =>
          handleDownload("/resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="h-10 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 transition-all duration-300 w-full relative overflow-hidden  cursor-pointer"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
          rotate: [0, -2, 2, -2, 0],
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">Download Resume</span>
      </motion.button>

      <motion.button
        onClick={scrollToContact}
        className="h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium transition-all duration-300 w-full relative overflow-hidden cursor-pointer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.06 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
          backgroundImage: "linear-gradient(to right, #8b5cf6, #3b82f6)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 bg-white opacity-0"
          whileHover={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.7 }}
        />
        <span className="relative z-10">Let's Have a Talk</span>
      </motion.button>
    </div>
  );
};
