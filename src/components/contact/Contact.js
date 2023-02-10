import React, { useRef } from 'react';
import './Contact.css';
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
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <MdEmail className='contact-option-icon' />
                        <h4>Email</h4>
                        <h5>nrshakib007@gmail.com</h5>
                        <a href='mailto:nrshakib007@gmail.com' target='_blank'>Send a Mail</a>
                    </article>
                    <article className="contact-option">
                        <BsMessenger className='contact-option-icon' />
                        <h4>Messenger</h4>
                        <h5>nrshakib</h5>
                        <a href='https://m.me/nadimrijvi.shakib' target='_blank'>Send Me a Message</a>
                    </article>
                    <article className="contact-option">
                        <BsWhatsapp className='contact-option-icon' />
                        <h4>What's App</h4>
                        <h5>NR Shakib</h5>
                        <a href='https:wa.me/01748379372' target='_blank'>Knock Me</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' />
                    <input type="email" name="email" placeholder='Your Email Address' />
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;