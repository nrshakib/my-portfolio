import React from "react";
import { MdOutlineMoreTime } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const hoverCard = {
    y: -8,
    scale: 1.04,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  };

  const floatBlob = {
    scale: [1, 1.4, 1],
    x: [0, -50, 0],
    y: [0, -40, 0],
    transition: {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatBlobSecondary = {
    scale: [1, 1.3, 1],
    x: [0, 60, 0],
    y: [0, 50, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const currentExperience = {
    role: "Front End Developer",
    company: "Remote Development Team",
    period: "April 2026 - July 2026",
    description:
      "Contributed to fast-paced, long-running product delivery with modern frontend workflows. Debugging complex UI issues, integrating APIs, and improve system reliability.",
  };

  const previousExperience = {
    role: "Front End Developer",
    company: "Spark Tech Agency",
    period: "June 2024 - April 2026",
    description:
      "Built responsive UIs and polished user experiences for web products. Participated in the full development lifecycle, from UI design and state management to API integration and performance optimization.",
  };

  const expertiseItems = [
    "Front End Development",
    "React.js & Next.js",
    "Responsive UI/UX",
    "API Integration",
    "State Management",
    "Performance Optimization",
  ];

  const cards = [
    {
      icon: <MdOutlineMoreTime />,
      title: "Recent Experience",
      item: currentExperience,
      accent: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: <MdOutlineMoreTime />,
      title: "Previous Experience",
      item: previousExperience,
      accent: "from-purple-500/20 to-pink-500/10",
    },
    {
      icon: <SiExpertsexchange />,
      title: "Expertise On",
      items: expertiseItems,
      accent: "from-emerald-500/20 to-green-500/10",
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
          animate={floatBlob}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={floatBlobSecondary}
        />
      </div>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-12 sm:mb-16"
      >
        <h5 className="text-sm sm:text-base text-gray-400 tracking-widest uppercase">
          Get To Know
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-blue-500">
          About Me
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              whileHover={hoverCard}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`group relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center border border-gray-700/70 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm ${card.accent}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-70" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-blue-500 text-4xl group-hover:scale-110 transition-transform shrink-0"
                  >
                    {card.icon}
                  </motion.div>
                  <h5 className="text-base sm:text-lg font-semibold text-white">
                    {card.title}
                  </h5>
                </div>

                {card.title === "Expertise On" ? (
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {card.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="rounded-full bg-gray-900/80 px-3 py-1 text-xs font-medium text-gray-300 border border-gray-700 hover:border-blue-500/50 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-3 rounded-xl border border-gray-700/70 bg-gray-900/70 px-3 py-3 text-left backdrop-blur-md"
                  >
                    <p className="text-base font-semibold text-white">
                      {card.item.role}
                    </p>
                    <p className="text-[12px] uppercase tracking-[0.2em] text-blue-400 mt-1">
                      {card.item.company}
                    </p>
                    <p className="text-xs text-yellow-500 mt-1">
                      {card.item.period}
                    </p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xs text-gray-400 mt-2 leading-relaxed"
                    >
                      {card.item.description}
                    </motion.p>
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center lg:text-justify"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            I'm a{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="font-semibold text-transparent bg-clip-text bg-blue-300 text-2xl"
            >
              Front End Developer
            </motion.span>{" "}
            with hands-on experience building modern user interfaces using{" "}
            <span className="text-green-400 font-semibold text-xl">
              JavaScript, ReactJS, NextJS, TailwindCSS, Material UI, Ant Design,
              RTK Query, and API Integration
            </span>
            . I'm a graduate in{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="font-semibold text-transparent bg-clip-text bg-cyan-400"
            >
              Computer Science and Engineering
            </motion.span>{" "}
            and currently focusing on{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="font-semibold text-xl text-transparent bg-clip-text bg-yellow-500"
            >
              Python &amp; Django
            </motion.span>{" "}
            for Backend technology.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
