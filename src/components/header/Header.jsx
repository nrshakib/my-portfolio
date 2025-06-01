import React from "react";
import Action from "./action";
import "./Header.css";
import Me from "../../../public/resources/images/me-4.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>MD Nadim Rijvi Shakib</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Action />
        <HeaderSocial></HeaderSocial>

        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
