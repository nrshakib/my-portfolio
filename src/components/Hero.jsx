import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { HeroAction } from "./HeroAction";
import { HeroSocial } from "./HeroSocial";

export const Hero = () => {
  return (
    <header
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden
      px-4 sm:px-6 md:px-10 lg:px-16
      py-16 sm:py-20 md:py-28"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-8 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Desktop Social Links */}
      <div className="hidden sm:block fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-10">
        <HeroSocial />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8">
          {/* Greeting */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent"
            style={{ fontFamily: "Quicksand, sans-serif" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {"MD Nadim Rijvi Shakib".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.04 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Underline */}
          <motion.div
            className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
              w-24 sm:w-40 md:w-56"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />

          {/* Role */}
          <motion.h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            Front End Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="max-w-xs sm:max-w-md md:max-w-2xl
              text-sm sm:text-base md:text-lg text-gray-400 px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Crafting beautiful, responsive web experiences with modern
            technologies
          </motion.p>

          {/* Actions */}
          <motion.div
            className="w-full max-w-xl mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <HeroAction />
          </motion.div>

          {/* Mobile Social */}
          <motion.div
            className="flex sm:hidden gap-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <HeroSocial />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <p className="hidden sm:block text-xs sm:text-sm text-gray-400">
          Scroll Down
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-gray-400 text-sm sm:text-base" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
