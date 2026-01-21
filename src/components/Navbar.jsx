import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";

const navItems = [
  { href: "#", icon: <AiOutlineHome /> },
  { href: "#about", icon: <AiOutlineUser /> },
  { href: "#experience", icon: <BiBook /> },
  { href: "#services", icon: <RiServiceLine /> },
  { href: "#portfolio", icon: <FiBox /> },
  { href: "#contact", icon: <BiMessageSquareDetail /> },
];

export const Navbar = () => {
  const [active, setActive] = useState("#");

  return (
    <div className="fixed bottom-4 sm:bottom-10 left-0 right-0 z-50 flex justify-center items-center px-4">
      {/* NAVBAR */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
        }}
        style={{
          background:
            "linear-gradient(135deg, rgba(20, 20, 30, 0.85), rgba(30, 30, 50, 0.75))",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1) inset",
        }}
        className="pointer-events-auto flex gap-1 sm:gap-3 py-3 px-3 sm:py-4 sm:px-8 md:px-10 rounded-full backdrop-blur-[50px] w-[90%] sm:w-[80%] lg:w-[60%] max-w-xl justify-between sm:justify-around"
      >
        {navItems.map(({ href, icon }, index) => {
          const isActive = active === href;

          return (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <IconButton
                component={motion.a}
                href={href}
                onClick={() => setActive(href)}
                whileHover={{
                  scale: 1.2,
                  y: -4,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  },
                }}
                whileTap={{ scale: 0.92 }}
                sx={{
                  position: "relative",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "1.8rem",
                    lg: "2.1rem",
                    xl: "2.5rem",
                  },
                  color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                  padding: { xs: "8px", sm: "12px", md: "14px" },
                  minWidth: { xs: "40px", sm: "48px" },
                  minHeight: { xs: "40px", sm: "48px" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                    style={{
                      position: "absolute",
                      inset: -2,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                      zIndex: -1,
                      boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
                    }}
                  />
                )}

                {/* Glow effect on hover - hidden on mobile for performance */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    zIndex: -2,
                    pointerEvents: "none",
                    display: window.innerWidth < 640 ? "none" : "block",
                  }}
                />

                {icon}
              </IconButton>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
