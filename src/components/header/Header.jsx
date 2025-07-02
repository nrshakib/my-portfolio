import Action from "./Action";
import Me from "../../../public/resources/images/me.png";
import HeaderSocial from "./HeaderSocial";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative w-full h-auto sm:h-[120vh] md:h-[50vh] top-10 sm:top-40">
      <div className="text-center">
        {/* Introduction Section */}
        <div className="flex flex-col items-center text-center gap-3 my-8">
          <motion.p
            className="sm:text-2xl"
            initial={{ opacity: 0, y: "-100vh" }} // Start with low opacity and slightly lower position
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
            transition={{ type: "spring", duration: 1.5, delay: 3.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.p
            className="text-2xl sm:text-7xl font-semibold font-sans"
            style={{
              fontFamily: "Quicksand, sans-serif",
              textShadow: "0 0 10px rgba(255, 255, 255,1)",
            }}
            initial={{ opacity: 0, scale: 0.8 }} // Start with low opacity and scale
            animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal scale
            transition={{ duration: 3.5 }}
          >
            {[
              "M",
              "D",
              " ",
              "N",
              "a",
              "d",
              "i",
              "m",
              " ",
              "R",
              "i",
              "j",
              "v",
              "i",
              " ",
              "S",
              "h",
              "a",
              "k",
              "i",
              "b",
            ].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.2, // Delay each letter animation
                  duration: 1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
          <motion.h5
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }} // Start slightly below and hidden
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{
              duration: 0.6,
              bounce: 0.3,
            }}
          >
            Front End Developer
          </motion.h5>
        </div>

        {/* Action Buttons and Image Section */}
        <div className="flex gap-8 items-center justify-center">
          <Action />
          {/* <div className="mt-10 flex gap-5 justify-center items-start"></div> */}
          {/* <div className="w-full sm:w-[200px] h-[250px] mt-16 rounded-xl">
            <img
              src={Me}
              alt="Portfolio Image"
              className="object-contain w-full h-full rounded-lg"
            />
          </div> */}
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-2 absolute left-0 top-32 ">
          <HeaderSocial />
        </div>

        {/* Scroll Down Button */}
        <Link
          to="#contact"
          className="flex items-center gap-2 absolute top-32 right-0 rotate-90 font-light text-sm "
        >
          <p>Scroll Down</p>
          <FaArrowDown className="rotate-270" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
