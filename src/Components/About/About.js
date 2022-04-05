import React from 'react';
import './About.css';
import Website from '../../Assets/Images/website1.png';
const About = () => {
    return (
        <div className='about-container'>
            <img src={Website} alt="" />
        </div>
    );
};

export default About;