import React from "react";
import "./Services.css";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-title">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>Front End Development with ReactJs</p>
            </li>
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>API Integration using RTK Query</p>
            </li>
            {/* <li>
              <GiCheckMark className="service-list-icon" />
              <p>Database Development with MongoDB</p>
            </li>
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>Authentication with Firebase</p>
            </li> */}
          </ul>
        </article>

        {/*System Support */}
        <article className="service">
          <div className="service-title">
            <h3>System Support</h3>
          </div>
          <ul className="service-list">
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>Installing and Maintaining Operating Systems</p>
            </li>
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>Installing Application Software</p>
            </li>
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>Installing System Management Tools</p>
            </li>
            <li>
              <GiCheckMark className="service-list-icon" />
              <p>Ensuring Highest Levels of Systems</p>
            </li>
          </ul>
        </article>
        {/*Services I don't Provide */}
        <article className="service">
          <div className="service-title">
            <h3>Services I don't Provide</h3>
          </div>
          <ul className="service-list">
            <li>
              <GiCrossMark className="service-list-icon" />
              <p>Web Hosting</p>
            </li>
            <li>
              <GiCrossMark className="service-list-icon" />
              <p>Hacking</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
