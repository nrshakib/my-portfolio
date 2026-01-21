import React from "react";
import { GiCheckMark, GiCrossMark } from "react-icons/gi"; // Actually imported from react-icons/gi in original file.

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <article className="bg-[var(--color-bg-variant)] rounded-b-[2rem] border border-[var(--color-primary)] h-fit transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:cursor-default">
          <div className="bg-[var(--color-primary)] p-8 rounded-b-[2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-[var(--color-bg)] text-[1rem] text-center font-medium">
              Web Development
            </h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <GiCheckMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">
                Front End Development with ReactJs
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <GiCheckMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">API Integration using RTK Query</p>
            </li>
          </ul>
        </article>

        {/*System Support */}
        <article className="bg-[var(--color-bg-variant)] rounded-b-[2rem] border border-[var(--color-primary)] h-fit transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:cursor-default">
          <div className="bg-[var(--color-primary)] p-8 rounded-b-[2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-[var(--color-bg)] text-[1rem] text-center font-medium">
              System Support
            </h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <GiCheckMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">
                Installing and Maintaining Operating Systems
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <GiCheckMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">Installing Application Software</p>
            </li>
            <li className="flex gap-4 mb-3">
              <GiCheckMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">
                Installing System Management Tools
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <GiCheckMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">
                Ensuring Highest Levels of Systems
              </p>
            </li>
          </ul>
        </article>

        {/*Services I don't Provide */}
        <article className="bg-[var(--color-bg-variant)] rounded-b-[2rem] border border-[var(--color-primary)] h-fit transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:cursor-default">
          <div className="bg-[var(--color-primary)] p-8 rounded-b-[2rem] shadow-[0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-[var(--color-bg)] text-[1rem] text-center font-medium">
              Services I don't Provide
            </h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <GiCrossMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">Web Hosting</p>
            </li>
            <li className="flex gap-4 mb-3">
              <GiCrossMark className="text-[var(--color-primary)] mt-[5px]" />
              <p className="text-[0.9rem]">Hacking</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
