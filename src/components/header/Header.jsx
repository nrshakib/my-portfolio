import Action from "./Action";
import Me from "../../../public/resources/images/me.png";
import HeaderSocial from "./HeaderSocial";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative h-auto sm:h-[120vh] md:h-[68vh] top-20">
      <div className="text-center h-full">
        {/* Introduction Section */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl">Hello I'm</p>
          <p
            className="text-3xl font-semibold font-sans"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            MD Nadim Rijvi Shakib
          </p>
          <h5 className="text-gray-400">Front End Developer</h5>
        </div>

        {/* Action Buttons and Image Section */}
        <div className="flex flex-col sm:flex-row-reverse gap-8 items-center justify-center py-8">
          <div className="mt-10 flex gap-5 justify-center items-start">
            <Action />
          </div>
          <div className="w-full sm:w-[200px] h-[250px] mt-16 rounded-xl">
            <img
              src={Me}
              alt="Portfolio Image"
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-2 absolute left-0 bottom-32 before:content-[''] before:block before:w-px before:h-8 before:bg-primary">
          <HeaderSocial />
        </div>

        {/* Scroll Down Button */}
        <Link
          to="#contact"
          className="scroll-down absolute bottom-32 -right-8 rotate-90 font-light text-sm flex items-center gap-2"
        >
          <p>Scroll Down</p>
          <FaArrowDown className="rotate-270" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
