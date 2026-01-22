import React, { useState, useEffect } from "react";
import { MdOutlineMoreTime } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { BsFolderCheck } from "react-icons/bs";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const About = () => {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = dayjs("2024-06-01");
      const today = dayjs();

      const diffMs = today.diff(startDate);
      const dur = dayjs.duration(diffMs);

      setExperience({
        years: dur.years(),
        months: dur.months(),
        days: dur.days(),
        hours: dur.hours(),
        minutes: dur.minutes(),
        seconds: dur.seconds(),
      });
    };

    // Calculate immediately
    calculateExperience();

    // Update every second
    const interval = setInterval(calculateExperience, 1000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: <MdOutlineMoreTime />,
      title: "Experience",
      subtitle: (
        <div className="flex flex-col items-center gap-1 mt-2">
          <div className="flex gap-1">
            <motion.span
              key={`y-${experience.years}`}
              initial={{ scale: 1.3, color: "#32CD32" }}
              animate={{ scale: 1, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 px-2 py-1 rounded text-xs font-mono font-bold"
            >
              {experience.years}Y
            </motion.span>{" "}
            <span className="text-[#37af37] font-bold">:</span>
            <motion.span
              key={`m-${experience.months}`}
              initial={{ scale: 1.3, color: "#32CD32" }}
              animate={{ scale: 1, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 px-2 py-1 rounded text-xs font-mono font-bold"
            >
              {experience.months}M
            </motion.span>{" "}
            <span className="text-[#37af37] font-bold">:</span>
            <motion.span
              key={`d-${experience.days}`}
              initial={{ scale: 1.3, color: "#32CD32" }}
              animate={{ scale: 1, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 px-2 py-1 rounded text-xs font-mono font-bold"
            >
              {experience.days}D
            </motion.span>{" "}
            <span className="text-[#37af37] font-bold">-</span>
            <motion.span
              key={`h-${experience.hours}`}
              initial={{ scale: 1.3, color: "#32CD32" }}
              animate={{ scale: 1, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 px-2 py-1 rounded text-sm font-mono font-bold"
            >
              {String(experience.hours).padStart(2, "0")}
            </motion.span>
            <span className="text-[#37af37] font-bold">:</span>
            <motion.span
              key={`min-${experience.minutes}`}
              initial={{ scale: 1.3, color: "#32CD32" }}
              animate={{ scale: 1, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 px-2 py-1 rounded text-sm font-mono font-bold"
            >
              {String(experience.minutes).padStart(2, "0")}
            </motion.span>
            <span className="text-[#37af37] font-bold">:</span>
            <motion.span
              key={`s-${experience.seconds}`}
              initial={{ scale: 1.3, color: "#32CD32" }}
              animate={{ scale: 1, color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 px-2 py-1 rounded text-sm font-mono font-bold"
            >
              {String(experience.seconds).padStart(2, "0")}
            </motion.span>
          </div>
        </div>
      ),
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
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-8 bottom-16 right-8 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
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
              {typeof card.subtitle === "string" ? (
                <small className="text-xs sm:text-sm text-gray-400">
                  {card.subtitle}
                </small>
              ) : (
                card.subtitle
              )}
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
