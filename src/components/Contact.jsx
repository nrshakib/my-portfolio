import React, { useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pkvihgc', 'template_7ddb4c5', form.current, 'BckdQm1W2XtMPtXIq')

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container w-[58%] grid grid-cols-[30%_58%] gap-[12%] md:grid-cols-1 md:gap-8 sm:w-[90%]">
                <div className="flex flex-col gap-5">
                    <article className="bg-[var(--color-bg-variant)] p-5 rounded-xl text-center border border-transparent transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)]">
                        <MdEmail className='text-[1.5rem] mb-2 mx-auto' />
                        <h4>Email</h4>
                        <h5>nrshakib007@gmail.com</h5>
                        <a href='mailto:nrshakib007@gmail.com' target='_blank' className="mt-4 inline-block text-[0.8rem] transition-all duration-400 hover:text-[1.1rem]">Send a Mail</a>
                    </article>
                    <article className="bg-[var(--color-bg-variant)] p-5 rounded-xl text-center border border-transparent transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)]">
                        <BsMessenger className='text-[1.5rem] mb-2 mx-auto' />
                        <h4>Messenger</h4>
                        <h5>nrshakib</h5>
                        <a href='https://m.me/nadimrijvi.shakib' target='_blank' className="mt-4 inline-block text-[0.8rem] transition-all duration-400 hover:text-[1.1rem]">Send Me a Message</a>
                    </article>
                    <article className="bg-[var(--color-bg-variant)] p-5 rounded-xl text-center border border-transparent transition-all duration-400 ease-in-out hover:bg-transparent hover:border-[var(--color-primary-variant)]">
                        <BsWhatsapp className='text-[1.5rem] mb-2 mx-auto' />
                        <h4>What's App</h4>
                        <h5>NR Shakib</h5>
                        <a href='https:wa.me/01748379372' target='_blank' className="mt-4 inline-block text-[0.8rem] transition-all duration-400 hover:text-[1.1rem]">Knock Me</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                    <input type="text" name="name" placeholder='Your Full Name' required className="w-full p-5 rounded-lg bg-transparent border-2 border-[var(--color-primary-variant)] text-[var(--color-white)] resize-none focus:outline-none focus:border-[var(--color-primary)] placeholder-gray-400" />
                    <input type="email" name="email" placeholder='Your Email Address' required className="w-full p-5 rounded-lg bg-transparent border-2 border-[var(--color-primary-variant)] text-[var(--color-white)] resize-none focus:outline-none focus:border-[var(--color-primary)] placeholder-gray-400" />
                    <textarea name="message" rows="7" placeholder='Your Message' required className="w-full p-5 rounded-lg bg-transparent border-2 border-[var(--color-primary-variant)] text-[var(--color-white)] resize-none focus:outline-none focus:border-[var(--color-primary)] placeholder-gray-400"></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;