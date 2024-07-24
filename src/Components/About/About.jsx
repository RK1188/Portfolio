import React from "react";
import "./About.css";
import theme_patten from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/PHOTO-1.jpg";

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1> About Me</h1>
        <img src={theme_patten} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Experienced Full Stack Developer with a passion for building
              scalable web applications and working with modern web
              technologies.
            </p>
            <p>
              Experienced Full Stack Developer with a passion for building
              scalable web applications and working with modern web
              technologies.
            </p>
          </div>
          <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
          <div className="about-skill"><p>Java</p><hr style={{width:"90%"}}/></div>
          <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
          <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
      <div className="about-achivement">
      <h1>3+</h1>
      <p>YEAR OF EXPERIENCED</p>
      </div>
      <hr/>
      <div className="about-achivement">
      <h1>4+</h1>
      <p>PROJECT COMPLETED</p>
      </div>
      <hr/>
      <div className="about-achivement">
      <h1>2+</h1>
      <p>HAPPY CLIENTS</p>
      </div>
      <hr/>
      </div>
    </div>
  );
};

export default About;
