import React from "react";
import { MdOutlineMoreTime } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { BsFolderCheck } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      icon: <MdOutlineMoreTime />,
      title: "Experience",
      subtitle: "1.5+ Years Experience",
      extra: (
        <>
          <span className="block mt-2 text-sm text-gray-400">
            as{" "}
            <span className="text-white font-semibold">
              Front End Developer
            </span>
          </span>
          <span className="block text-sm text-gray-400">
            at{" "}
            <span className="text-white font-semibold">Spark Tech Agency</span>
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
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-gray-900"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h5 className="text-sm sm:text-base text-gray-400 tracking-widest uppercase">
          Get To Know
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-blue-500">
          About Me
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-gray-800 rounded-2xl p-6 sm:p-8 text-center
                border border-transparent shadow-md hover:shadow-xl 
                hover:border-blue-500 cursor-pointer transition-all duration-300"
            >
              <div className="text-blue-500 text-4xl mx-auto group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h5 className="text-base sm:text-lg font-semibold mb-1 text-white">
                {card.title}
              </h5>
              <small className="text-xs sm:text-sm text-gray-400">
                {card.subtitle}
              </small>
              {card.extra && <div className="mt-2 text-sm">{card.extra}</div>}
            </motion.article>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center lg:text-justify">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            I'm a{" "}
            <span className="font-semibold text-white hover:text-gray-300 transition-colors">
              Front End Developer
            </span>{" "}
            with hands-on experience building modern user interfaces using{" "}
            <span className="text-gray-300 font-semibold">
              JavaScript, ReactJS, NextJS, TailwindCSS, Material UI, Ant Design,
              RTK Query
            </span>
            . I graduated in{" "}
            <span className="font-semibold text-white hover:text-gray-300 transition-colors">
              Computer Science and Engineering
            </span>{" "}
            and currently focusing on{" "}
            <span className="font-semibold group cursor-pointer">
              <span className="group-hover:text-green-400">M</span>
              <span className="group-hover:text-white">E</span>
              <span className="group-hover:text-cyan-400">R</span>
              <span className="group-hover:text-green-600">N</span> Stack Web
              Development
            </span>
            .
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all hover:scale-110 duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
