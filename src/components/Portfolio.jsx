import React from "react";
import Img1 from "../../public/resources/images/portfolio/car-service.jpg";
import Img2 from "../../public/resources/images/portfolio/ecommerce-ej.jpg";
import Img3 from "../../public/resources/images/portfolio/admin-dashboard.jpg";
import Img4 from "../../public/resources/images/portfolio/restaurant.png";
import Img5 from "../../public/resources/images/portfolio/e-commerce.jpg";
import Img6 from "../../public/resources/images/portfolio/temperature app.jpg";
import { div } from "motion/react-client";

const data = [
  {
    id: 1,
    // image: Img1,
    title: "Photo Generator Website",
    // github: "https://github.com/nrshakib/genius-car-services",
    live: "https://yannick-ai-photo-generator-website.vercel.app/",
  },
  {
    id: 2,
    // image: Img2,
    title: "E-commerce Site with API Integration",
    // github: "https://github.com/nrshakib/ecommerce-ej-fullstack",
    live: "https://your-jewel.com/",
  },
  {
    id: 3,
    image: Img3,
    title: "Admin Dashboard using ReactJs,TailwindCSS & MUI",
    // github: "https://github.com/nrshakib/admin-dashboard",
    live: "https://time-tracking-app-dashboard.netlify.app/",
  },
  {
    id: 4,
    image: Img4,
    title: "Restaurant Website using ReactJs",
    github: "https://github.com/nrshakib/restaurant-website-react",
    live: "https://nrshakib.github.io/restaurant-website-react/",
  },

  {
    id: 5,
    image: Img6,
    title: "City Temperature App using Js",
    github: "https://github.com/nrshakib/city-temperature",
    live: "https://nrshakib.github.io/city-temperature/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="bg-[var(--color-bg-variant)] p-5 rounded-[2rem] border border-transparent transition-all duration-400 ease-in-out hover:border-[var(--color-primary-variant)] hover:bg-transparent">
              <div className="rounded-[1.5rem] overflow-hidden h-[100px] w-full">
                {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-700"></div>}
              </div>
              <h3 className="mt-5 mb-4 text-[1rem]">{title}</h3>
              <div className="flex gap-4 mb-2">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                <a href={live} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
