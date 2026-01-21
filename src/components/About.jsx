import React from "react";
// import Me from "../../../public/resources/images/me-3.png";
import { MdOutlineMoreTime } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container grid grid-cols-1 gap-[30px]">
        <div className="text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)] cursor-pointer">
              <MdOutlineMoreTime className="text-[var(--color-primary)] text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] font-medium">Experience</h5>
              <small className="text-[0.7rem] text-[var(--color-light)]">1+ Year Experience</small>
              <div className="mt-2 text-[var(--color-light)] text-[0.9rem]">
                as{" "}
                <span className="text-white font-medium sm:text-lg">
                  Front End Developer
                </span>
                <div className="mt-1">
                  at{" "}
                  <span className="text-white font-medium text-lg">
                    Spark Tech Agency
                  </span>
                </div>
              </div>
            </article>
            <article className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)] cursor-pointer">
              <SiExpertsexchange className="text-[var(--color-primary)] text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] font-medium">Expertise On</h5>
              <small className="text-[0.7rem] text-[var(--color-light)]">Front End Development</small>
            </article>
            <article className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)] cursor-pointer">
              <BsFolderCheck className="text-[var(--color-primary)] text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] font-medium">Projects</h5>
              <small className="text-[0.7rem] text-[var(--color-light)]">10+ Hands On Projects</small>
            </article>
          </div>
          <p className="my-[2rem] text-[var(--color-light)] text-[0.9rem] text-justify lg:mx-0">
            I'm a <b className="text-[1.2rem] transition-all hover:text-[1.5rem] hover:text-[#9fa19f] cursor-pointer">Front End Developer</b>.I work with{" "}
            <span className="text-[#9fa19f] font-semibold text-lg">
              JavaScript, ReactJs, NextJs, TailwindCSS, MaterialUI, Ant Design,
              RTK Query
            </span>
            .I'm graduated in{" "}
            <b className="text-[1.2rem] transition-all hover:text-[1.5rem] hover:text-[#9fa19f] cursor-pointer">Computer Science and Engineering</b> and
            now working on{" "}
            <b className="text-[1.2rem] transition-all hover:text-[1.5rem] hover:text-[#9fa19f] cursor-pointer group">
              {" "}
              <span className="group-hover:text-[#00ed64]">M</span>
              <span className="group-hover:text-[#f5f5f5]">E</span>
              <span className="group-hover:text-[#61dbfb]">R</span>
              <span className="group-hover:text-[#3c873a]">N</span> Stack Web Development
            </b>
            .
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
