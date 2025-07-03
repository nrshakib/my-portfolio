import React from "react";
import "./Portfolio.css";
import Img1 from "../../../public/resources/images/portfolio/car-service.jpg";
import Img2 from "../../../public/resources/images/portfolio/ecommerce-ej.jpg";
import Img3 from "../../../public/resources/images/portfolio/admin-dashboard.jpg";
import Img4 from "../../../public/resources/images/portfolio/restaurant.png";
import Img5 from "../../../public/resources/images/portfolio/e-commerce.jpg";
import Img6 from "../../../public/resources/images/portfolio/temperature app.jpg";
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
      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                {image ? <img src={image} alt={title} /> : <div></div>}
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-action">
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
