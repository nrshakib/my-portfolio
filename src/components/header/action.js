import React from "react";
import CV from "../../resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf";
import Resume from "../../resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf";

const Action = () => {
  return (
    <div className="action">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Have a Talk
      </a>
    </div>
  );
};

export default Action;
