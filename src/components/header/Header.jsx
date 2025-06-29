import Action from "./Action";
import Me from "../../../public/resources/images/me-4.png";
import HeaderSocial from "./HeaderSocial";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative h-auto md:h-[68vh] sm:h-[120vh] top-20">
      <div className="text-center h-full">
        <p className="text-2xl">Hello I'm</p>
        <h1>MD Nadim Rijvi Shakib</h1>
        <h5 className="text-gray-400">Full Stack Developer</h5>

        <div className="mt-10 flex gap-5 justify-center">
          <Action />
        </div>

        <div className="flex flex-col items-center gap-2 absolute left-0 bottom-32 before:content-[''] before:block before:w-px before:h-8 before:bg-primary">
          <HeaderSocial />
        </div>

        <div
          className="me bg-gradient-to-t from-primary to-transparent w-[22rem] h-[21.8rem] absolute left-1/2 -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden p-8"
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            paddingBottom: "1.5rem",
          }}
        >
          {/* <img src={Me} alt="Me" /> */}
        </div>

        <Link
          to="#contact"
          // href="#contact"
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
