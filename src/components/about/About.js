import React from 'react';
import './About.css';
import ME from '../../resources/images/me-3.png'
import { MdOutlineMoreTime } from 'react-icons/md';
import { SiExpertsexchange } from 'react-icons/si';
import { BsFolderCheck } from 'react-icons/bs';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <MdOutlineMoreTime className='about-icon' />
                            <h5>Experience</h5>
                            <small>1+ Hands On Experience</small>
                        </article>
                        <article className="about-card">
                            <SiExpertsexchange className='about-icon' />
                            <h5>Expertise On</h5>
                            <small>ReactJs,NodeJs</small>
                        </article>
                        <article className="about-card">
                            <BsFolderCheck className='about-icon' />
                            <h5>Projects</h5>
                            <small>7+ Hands On Projects</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur impedit ea voluptatibus eveniet dolore error neque, vitae adipisci ducimus eligendi, sint officiis, et placeat excepturi dolorem! Cumque, dolore natus.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;