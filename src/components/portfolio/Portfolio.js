import React from "react";
import "./Portfolio.css";
import Img1 from "../../resources/images/portfolio/car-service.jpg";
import Img2 from "../../resources/images/portfolio/ecommerce-ej.jpg";
import Img3 from "../../resources/images/portfolio/admin-dashboard.jpg";
import Img4 from "../../resources/images/portfolio/restaurant.png";
import Img5 from "../../resources/images/portfolio/e-commerce.jpg";
import Img6 from "../../resources/images/portfolio/temperature app.jpg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Car Service Site(Full Stack)",
    github: "https://github.com/nrshakib/genius-car-services",
    live: "https://github.com/nrshakib/genius-car-services",
  },
  {
    id: 2,
    image: Img2,
    title: "E-commerce Site(Full Stack)",
    github: "https://github.com/nrshakib/ecommerce-ej-fullstack",
    live: "https://github.com/nrshakib/ecommerce-ej-fullstack",
  },
  {
    id: 3,
    image: Img3,
    title: "Admin Dashboard using ReactJs",
    github: "https://github.com/nrshakib/admin-dashboard",
    live: "https://nrshakib.github.io/admin-dashboard/",
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
    image: Img5,
    title: "E-Commerce Site using JS",
    github:
      "https://github.com/nrshakib/Panda-eCommerce-usingBootstrap-from-Figma",
    live: "https://nrshakib.github.io/Panda-eCommerce-usingBootstrap-from-Figma/",
  },
  {
    id: 6,
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
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-action">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
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
