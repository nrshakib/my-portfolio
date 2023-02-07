import React from 'react';
import CV from '../../resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf';

const Action = () => {
    return (
        <div className='action'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default Action;