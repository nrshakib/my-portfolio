import React from 'react';
import './Footer.css';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>MD Nadim Rijvi Shakib</a>

            <div className="footer-socials">
                <a href="https://www.facebook.com/nadimrijvi.shakib"><BsFacebook /></a>
                <a href="https://www.linkedin.com/in/mdnadimrijvishakib/"><BsLinkedin /></a>
                <a href="https://github.com/nrshakib"><BsGithub /></a>
            </div>
            <div className="footer-copyright">
                <small>&copy; MD Nadim Rijvi Shakib.
                    <p>All Right Reserved</p>
                    <p>{new Date().getFullYear()}</p>
                </small>
            </div>
        </footer>
    );
};

export default Footer;