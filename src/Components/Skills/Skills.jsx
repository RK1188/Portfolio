import React from "react";
import html5 from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css.png";
import react from "../../assets/Skills/react.png";
// import firebase from "../../assets/Skills/firebase.png";
import java from "../../assets/Skills/java.png";
import mysql from "../../assets/Skills/mysql.png";
// import Node from "../../assets/Skills/Node.png";
// import redux from "../../assets/Skills/redux.png";
import spring from "../../assets/Skills/spring.png";
import selinium from "../../assets/Skills/selinium.png";
import aws from "../../assets/Skills/aws.png";
import postgres from "../../assets/Skills/Postgresql.png";
import "./Skills.css";

const Skills = React.forwardRef((props, ref) => {
  const skills = [
    { img: html5, alt: "HTML" },
    { img: css, alt: "CSS" },
    { img: react, alt: "React" },
    { img: java, alt: "Java" },
    { img: mysql, alt: "MySQL" },
    { img: postgres, alt: "PostgreSQL" },
    { img: spring, alt: "Spring" },
    { img: aws, alt: "AWS" },
    { img: selinium, alt: "Selenium" },
  ];

  return (
    <div className="skills-container" ref={ref}>
      <h1>Skills</h1>
      <div className="skills-grid" data-aos="fade-right">
        {skills.map((item, index) => (
          <div key={index} className="skill-item">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;