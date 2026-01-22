import React, { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { Tabs, Tab, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
  "Frontend Development": [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "NodeJs",
    "HTML5",
    "CSS3",
  ],
  "UI & Styling": [
    "Tailwind CSS",
    "Bootstrap 5",
    "Material UI",
    "Ant Design",
    "Responsive Web Design",
  ],
  "State & Data Handling": ["RTK Query", "Axios", "REST APIs"],
  "Programming Language": ["JavaScript", "Python"],
};

const toolsData = [
  "VS Code",
  "Postman",
  "Version Control (Git)",
  "MongoDB Compass",
  "Figma",
];

export default function Skills() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-8 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <h5 className="text-center text-gray-400 text-sm sm:text-base tracking-widest uppercase">
          Skills I Have
        </h5>
        <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-12">
          My Expertise
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="container w-[95%] md:w-[85%] lg:w-[90%] mx-auto relative z-10">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
            "& .MuiTabs-root": {
              background: "rgba(55, 55, 120, 0.3)",
              borderRadius: "10px",
              padding: "5px",
              backdropFilter: "blur(12px)",
              // border: "1px solid rgba(77, 181, 255, 0.2)",
            },
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                height: "100%",
                borderRadius: "10px",
                backgroundColor: "#4db5ff",
                zIndex: 0,
                opacity: 0.15,
              },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "12px", sm: "14px" },
                textTransform: "capitalize",
                fontWeight: 500,
                borderRadius: "10px",
                minWidth: { xs: "100px", sm: "140px" },
                zIndex: 1,
                transition: "all 0.3s ease",
                "&.Mui-selected": {
                  color: "#fff",
                  fontWeight: 600,
                },
              },
            }}
          >
            <Tab label="Skills" disableRipple />
            <Tab label="Tools" disableRipple />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {tabValue === 0 && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
            >
              {Object.entries(skillsData).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/40 backdrop-blur-lg p-4 lg:p-8 rounded-2xl border border-blue-500/30 hover:bg-gray-800/60 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(77,181,255,0.2)]"
                >
                  <h3 className="text-center mb-6 lg:text-2xl text-blue-300 font-semibold tracking-wide">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {items.map((skill, index) => (
                      <motion.article
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex gap-2 lg:gap-3 items-center px-3 lg:px-4 xl:px-6 py-2 lg:py-3 xl:py-4 rounded-xl bg-white/5 hover:bg-blue-500/10 transition-colors cursor-pointer"
                      >
                        <HiBadgeCheck className="text-blue-500 text-xl shrink-0" />
                        <h4 className="text-xs lg:text-sm xl:text-base font-medium text-gray-200">
                          {skill}
                        </h4>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tabValue === 1 && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <div className="bg-gray-800/40 backdrop-blur-lg p-4 lg:p-12 rounded-2xl border border-blue-500/30 w-full md:w-3/4 lg:w-2/3 hover:bg-gray-800/60 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(77,181,255,0.2)]">
                <h3 className="text-center mb-6 lg:text-2xl text-blue-300 font-semibold tracking-wide">
                  Development Tools
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center sm:justify-items-start">
                  {toolsData.map((tool, index) => (
                    <motion.article
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex gap-2 lg:gap-3 items-center bg-white/5 px-3 lg:px-4 xl:px-6 py-2 lg:py-3 xl:py-4 rounded-xl w-full hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                      <HiBadgeCheck className="text-blue-500 text-2xl shrink-0" />
                      <h4 className="text-xs lg:text-sm xl:text-base font-medium text-gray-200">
                        {tool}
                      </h4>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
