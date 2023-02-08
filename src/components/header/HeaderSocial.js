import React from 'react';
import { BsGithub, BsLinkedin, BsDoorOpenFill } from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header-socials'>
            <a href="https://linkedin.com" target='_blank'><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target='_blank'><BsGithub></BsGithub></a>
            <a href="https://bdjobs.com" target='_blank'><BsDoorOpenFill /></a>
        </div>
    );
};

export default HeaderSocial;