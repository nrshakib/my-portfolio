import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pkvihgc",
      "template_7ddb4c5",
      form.current,
      "BckdQm1W2XtMPtXIq",
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-10 bg-gray-900">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h5 className="text-sm uppercase tracking-widest text-gray-400">
          Get In Touch
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mt-2">
          Contact Me
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Options */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <article className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl text-center border border-transparent hover:border-blue-500/40 transition shadow-lg">
            <MdEmail className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white">Email</h4>
            <h5 className="text-sm text-gray-400">
              nadimrijvi.shakib@gmail.com
            </h5>
            <a
              href="mailto:nadimrijvi.shakib@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-yellow-400 hover:text-blue-300 transition"
            >
              Send a Mail →
            </a>
          </article>

          {/* Messenger */}
          <article className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl text-center border border-transparent hover:border-blue-500/40 transition shadow-lg">
            <BsMessenger className="text-3xl text-blue-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white">Messenger</h4>
            <h5 className="text-sm text-gray-400">nrshakib</h5>
            <a
              href="https://m.me/nadimrijvi.shakib"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Send Message →
            </a>
          </article>

          {/* WhatsApp */}
          <article className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl text-center border border-transparent hover:border-blue-500/40 transition shadow-lg">
            <BsWhatsapp className="text-3xl text-green-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
            <h5 className="text-sm text-gray-400">NR Shakib</h5>
            <a
              href="https://wa.me/01748379372"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-green-400 hover:text-blue-300 transition"
            >
              Knock Me →
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800/40 backdrop-blur-lg p-2 sm:p-8 rounded-2xl border border-gray-700 shadow-lg flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none resize-none placeholder-gray-400"
          />

          <button
            type="submit"
            className="mt-2 bg-blue-500 text-gray-100 font-medium px-6 py-3 rounded-lg hover:bg-blue-400 transition shadow-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
