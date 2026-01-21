import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Name / Logo */}
        <a
          href="#"
          className="inline-block text-xl sm:text-2xl font-semibold text-white hover:text-blue-400 transition mb-6"
        >
          MD Nadim Rijvi Shakib
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-8">
          <a
            href="https://www.facebook.com/nadimrijvi.shakib"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white p-3 rounded-xl border border-gray-800 
              hover:bg-blue-500 hover:text-gray-900 hover:border-blue-500 
              transition-all duration-300 shadow-md hover:scale-110"
          >
            <BsFacebook size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/mdnadimrijvishakib/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white p-3 rounded-xl border border-gray-800 
              hover:bg-blue-500 hover:text-gray-900 hover:border-blue-500 
              transition-all duration-300 shadow-md hover:scale-110"
          >
            <BsLinkedin size={18} />
          </a>

          <a
            href="https://github.com/nrshakib"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white p-3 rounded-xl border border-gray-800 
              hover:bg-blue-500 hover:text-gray-900 hover:border-blue-500 
              transition-all duration-300 shadow-md hover:scale-110"
          >
            <BsGithub size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 leading-relaxed">
          <p>&copy; {new Date().getFullYear()} MD Nadim Rijvi Shakib</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
