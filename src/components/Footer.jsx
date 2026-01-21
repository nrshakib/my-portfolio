import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary)] py-12 text-center text-[0.9rem] mt-28">
            <a href="#" className="text-[var(--color-bg)] text-[1.5rem] font-medium mb-8 inline-block">MD Nadim Rijvi Shakib</a>

            <div className="flex justify-center gap-4 mb-8">
                <a href="https://www.facebook.com/nadimrijvi.shakib" className="bg-[var(--color-bg)] text-[var(--color-white)] p-3 rounded-[0.7rem] flex border border-transparent hover:bg-transparent hover:text-[var(--color-bg)] hover:border-black"><BsFacebook /></a>
                <a href="https://www.linkedin.com/in/mdnadimrijvishakib/" className="bg-[var(--color-bg)] text-[var(--color-white)] p-3 rounded-[0.7rem] flex border border-transparent hover:bg-transparent hover:text-[var(--color-bg)] hover:border-black"><BsLinkedin /></a>
                <a href="https://github.com/nrshakib" className="bg-[var(--color-bg)] text-[var(--color-white)] p-3 rounded-[0.7rem] flex border border-transparent hover:bg-transparent hover:text-[var(--color-bg)] hover:border-black"><BsGithub /></a>
            </div>
            <div className="mb-16 text-[var(--color-bg)]">
                <small>&copy; MD Nadim Rijvi Shakib.
                    <p>All Right Reserved</p>
                    <p>{new Date().getFullYear()}</p>
                </small>
            </div>
        </footer>
    );
};

export default Footer;