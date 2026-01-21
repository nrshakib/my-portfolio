import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronDown, FiCode } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

import chickshot from "../../public/resources/images/portfolio/chickshot.png";
import goConnecte from "../../public/resources/images/portfolio/go-connecte.png";
import restaurant from "../../public/resources/images/portfolio/restaurant.png";
import teasForCause from "../../public/resources/images/portfolio/teas-for-cause.png";
import cityTemperature from "../../public/resources/images/portfolio/temperature app.jpg";
import ticketBooking from "../../public/resources/images/portfolio/ticket-booking.png";
import youtJewel from "../../public/resources/images/portfolio/your-jewel.png";

const data = [
  {
    id: 1,
    image: chickshot,
    title: "Photo Generator Website",
    live: "https://yannick-ai-photo-generator-website.vercel.app/",
    contribution: [
      "Developed the entire front-end using NextJs and Tailwind CSS.",
      "Ensured a fully responsive and user-friendly interface.",
    ],
  },
  {
    id: 2,
    image: goConnecte,
    title: "Car Rental Service Website",
    live: "https://go-connecte.vercel.app/",
    contribution: [
      "Built front-end with NextJs, Tailwind CSS, and Material UI.",
      "Implemented smooth animations using Framer Motion.",
      "Optimized for responsive and interactive user experience.",
    ],
  },
  {
    id: 3,
    image: youtJewel,
    title: "E-commerce Site with API Integration",
    live: "https://your-jewel.com/",
    contribution: [
      "Implemented front-end features using NextJs and TailwindCSS.",
      "Integrated backend Rest APIs for dynamic product listings.",
      "Enabled seamless user interactions and shopping flow.",
    ],
  },
  {
    id: 4,
    image: ticketBooking,
    title: "Ticket Booking Website",
    live: "https://adrien-ticket-booking-website.vercel.app/",
    contribution: [
      "Developed UI using NextJs, Tailwind CSS, and Material UI.",
      "Integrated Stripe API for secure payment processing.",
      "Connected Rest APIs for real-time ticket availability.",
    ],
  },
  {
    id: 5,
    image: teasForCause,
    title: "Teas For Cause E-commerce",
    live: "https://teas-for-cause.vercel.app/",
    contribution: [
      "Created a responsive E-commerce interface with NextJs.",
      "Integrated Rest APIs and Stripe for payments.",
      "Utilized Framer Motion for engaging UI transitions.",
    ],
  },
  {
    id: 6,
    image: restaurant,
    title: "Restaurant Website",
    live: "https://nrshakib.github.io/restaurant-website-react/",
    contribution: [
      "Developed the entire website using ReactJs and pure CSS.",
      "Focused on a clean, responsive, and appetizing design.",
    ],
  },
  {
    id: 7,
    image: cityTemperature,
    title: "City Temperature App",
    live: "https://nrshakib.github.io/city-temperature/",
    contribution: [
      "Built using Vanilla JavaScript, HTML, and CSS.",
      "Fetched real-time data from OpenWeatherMap API.",
      "Displayed live temperature updates for searching cities.",
    ],
  },
];

const PortfolioCard = ({ image, title, live, contribution }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      layout
      className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-colors duration-300 shadow-lg hover:shadow-blue-500/10"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <FiCode className="text-4xl text-gray-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-3 mb-4">
           {/* Action Buttons */}
           <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            Live Demo <FiExternalLink />
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              isOpen 
                ? "bg-white/10 border-white/20 text-white" 
                : "border-white/10 text-gray-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Contributions
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.span>
          </button>
        </div>

        {/* Contributions Expandable Section */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-3">
                  My key contributions:
                </h4>
                <ul className="space-y-3">
                  {contribution && contribution.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3 text-sm text-gray-300 leading-relaxed"
                    >
                      <BsCheckCircleFill className="text-blue-500 mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-10 bg-gray-900/50">
      <div className="text-center mb-16">
        <h5 className="text-gray-400 uppercase tracking-widest text-sm font-medium mb-2">
          My Recent Work
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">
          Portfolio
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
