import React from "react";
import { MdOutlineMoreTime } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h5 className="text-sm sm:text-base text-[var(--color-light)] tracking-widest uppercase">
          Get To Know
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          About Me
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MdOutlineMoreTime />,
                title: "Experience",
                subtitle: "1+ Year Experience",
                extra: (
                  <>
                    <span className="block mt-2 text-sm text-[var(--color-light)]">
                      as{" "}
                      <span className="text-white font-semibold">
                        Front End Developer
                      </span>
                    </span>
                    <span className="block text-sm text-[var(--color-light)]">
                      at{" "}
                      <span className="text-white font-semibold">
                        Spark Tech Agency
                      </span>
                    </span>
                  </>
                ),
              },
              {
                icon: <SiExpertsexchange />,
                title: "Expertise On",
                subtitle: "Front End Development",
              },
              {
                icon: <BsFolderCheck />,
                title: "Projects",
                subtitle: "10+ Hands On Projects",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="group bg-[var(--color-bg-variant)]
                  rounded-2xl p-6 sm:p-8 text-center
                  border border-transparent
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:bg-transparent
                  hover:border-[var(--color-primary-variant)]
                  hover:shadow-xl cursor-pointer"
              >
                <div className="text-[var(--color-primary)] text-3xl mb-4 mx-auto group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h5 className="text-base font-medium">{item.title}</h5>
                <small className="text-xs sm:text-sm text-[var(--color-light)]">
                  {item.subtitle}
                </small>

                {item.extra && <div className="mt-2 text-sm">{item.extra}</div>}
              </article>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center lg:text-justify">
            <p className="text-sm sm:text-base md:text-lg text-[var(--color-light)] leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-white hover:text-[#9fa19f] transition">
                Front End Developer
              </span>{" "}
              with hands-on experience building modern user interfaces using{" "}
              <span className="text-[#9fa19f] font-semibold">
                JavaScript, ReactJS, NextJS, TailwindCSS, Material UI, Ant
                Design, RTK Query
              </span>
              . I graduated in{" "}
              <span className="font-semibold text-white hover:text-[#9fa19f] transition">
                Computer Science and Engineering
              </span>{" "}
              and currently focusing on{" "}
              <span className="font-semibold transition group cursor-pointer">
                <span className="group-hover:text-[#00ed64]">M</span>
                <span className="group-hover:text-white">E</span>
                <span className="group-hover:text-[#61dbfb]">R</span>
                <span className="group-hover:text-[#3c873a]">N</span> Stack Web
                Development
              </span>
              .
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn btn-primary px-8 py-3 text-sm sm:text-base"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
