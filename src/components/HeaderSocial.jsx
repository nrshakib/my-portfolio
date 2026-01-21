import React from "react";
import { BsGithub, BsLinkedin, BsDoorOpenFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderSocial = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link to="https://www.linkedin.com/in/nrshakib/" target="_blank">
        <BsLinkedin></BsLinkedin>
      </Link>
      <Link to="https://github.com/nrshakib" target="_blank">
        <BsGithub></BsGithub>
      </Link>
      {/* <Link to="https://bdjobs.com" target="_blank">
        <BsDoorOpenFill />
      </Link> */}
    </div>
  );
};

export default HeaderSocial;
