import React from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className="container experience-container">
        {/* Front End Section*/}
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* Back End Section*/}
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>ExpressJs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
