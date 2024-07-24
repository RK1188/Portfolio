import React from 'react';
import './Hero.css';
// import Navbar from '../Navbar/Navbar.js';
import profile_img from '../../assets/PHOTO-1.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>
        <span>
          <Typewriter
            options={{
              strings: ["Ranjithkumar K", "Software Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        ,I build things for the web.
      </h1>
      <p>Experienced Full Stack Developer with a passion for building scalable web applications.</p>
      <div className='hero-action'>
        <div className='hero-links'>
          <a href="https://www.linkedin.com/in/ranjithkumar-k" className='anchor-link' target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ranjithkumar-k" className='anchor-link' target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/ranjithkumar-k" className='anchor-link' target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
        <div className='hero-resume'>
          <a href="https://drive.google.com/file/d/1evp7yzFYeyoQIRQlK9aILd7XieWx8DWG/view?usp=sharing" className='anchor-link' target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
  

