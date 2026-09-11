import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { HeroAction } from "./HeroAction";
import { HeroSocial } from "./HeroSocial";

export const Hero = () => {
  const name = "MD Nadim Rijvi Shakib";
  const steps = Array.from({ length: name.length + 1 }, (_, i) => `${i}ch`);

  return (
    <header
      className="relative min-h-[80vh] sm:min-h-[92vh] 2xl:min-h-[50vh] w-full flex items-center justify-center overflow-hidden
      px-4 sm:px-6 md:px-10 lg:px-16
      py-5 sm:py-5"
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
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8 w-full">
          {/* Greeting */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-200 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-bold leading-tight text-2xl sm:text-4xl lg:text-5xl
                       overflow-hidden whitespace-nowrap"
            style={{ fontFamily: "Quicksand, sans-serif" }}
            initial={{ width: "0ch" }}
            animate={{ width: steps }}
            transition={{
              duration: name.length * 0.15,
              delay: 0.9,
              ease: "linear",
              times: steps.map((_, i) => i / (steps.length - 1)),
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.2,
            }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </span>
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-normal tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            Front End Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="max-w-xs sm:max-w-md md:max-w-2xl
              text-sm sm:text-base md:text-lg text-gray-400 px-2 sm:px-0 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Building digital experiences with purpose, personality, and
            precision.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="w-full max-w-2xl mt-4 sm:mt-6"
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
      {/* <motion.div
        className="fixed right-1 -translate-x-1/2
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
        <div className="hidden sm:flex flex-col items-center leading-tight text-xs sm:text-sm text-gray-400">
          {"Scroll Down".split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-gray-400 text-sm sm:text-base" />
        </motion.div>
      </motion.div> */}
    </header>
  );
};

export default Hero;
