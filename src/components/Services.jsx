import React from "react";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-10 bg-gray-900">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h5 className="text-gray-400 uppercase tracking-widest text-sm">
          What I Offer
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mt-2">
          Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Web Development */}
        <article className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl border border-blue-500/30 hover:border-blue-500 hover:bg-gray-800/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(77,181,255,0.2)]">
          <div className="bg-blue-500 text-gray-100 p-6 rounded-t-2xl">
            <h3 className="text-center text-base sm:text-lg font-semibold ">
              Web Development
            </h3>
          </div>

          <ul className="p-6 space-y-4">
            <li className="flex gap-4 items-start">
              <GiCheckMark className="text-blue-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                Front End Development with React.js
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <GiCheckMark className="text-blue-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                API Integration using RTK Query
              </p>
            </li>
          </ul>
        </article>

        {/* System Support */}
        <article className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl border border-blue-500/30 hover:border-blue-500 hover:bg-gray-800/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(77,181,255,0.2)]">
          <div className="bg-blue-500 text-gray-100 p-6 rounded-t-2xl">
            <h3 className="text-center text-base sm:text-lg font-semibold">
              System Support
            </h3>
          </div>

          <ul className="p-6 space-y-4">
            <li className="flex gap-4 items-start">
              <GiCheckMark className="text-blue-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                Installing & maintaining operating systems
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <GiCheckMark className="text-blue-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                Installing application software
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <GiCheckMark className="text-blue-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                Installing system management tools
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <GiCheckMark className="text-blue-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                Ensuring optimal system performance
              </p>
            </li>
          </ul>
        </article>

        {/* Services Not Provided */}
        <article className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl border border-red-500/30 hover:border-red-500 hover:bg-gray-800/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]">
          <div className="bg-red-500 text-gray-100 p-6 rounded-t-2xl">
            <h3 className="text-center text-base sm:text-lg font-semibold">
              Services I Don’t Provide
            </h3>
          </div>

          <ul className="p-6 space-y-4">
            <li className="flex gap-4 items-start">
              <GiCrossMark className="text-red-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">Web Hosting</p>
            </li>
            <li className="flex gap-4 items-start">
              <GiCrossMark className="text-red-500 mt-1" />
              <p className="text-sm sm:text-base text-gray-300">
                Hacking or illegal activities
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
