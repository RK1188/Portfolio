// import React from "react";
// import html5 from "../../assets/Skills/html.png";
// import css from "../../assets/Skills/css.png";
// import react from "../../assets/Skills/react.png";
// // import firebase from "../../assets/Skills/firebase.png";
// import java from "../../assets/Skills/java.png";
// import mysql from "../../assets/Skills/mysql.png";
// // import Node from "../../assets/Skills/Node.png";
// // import redux from "../../assets/Skills/redux.png";
// import spring from "../../assets/Skills/spring.png";
// import selinium from "../../assets/Skills/selinium.png";
// import aws from "../../assets/Skills/aws.png";
// import postgres from "../../assets/Skills/Postgresql.png";
// import "./Skills.css";

// const Skills = React.forwardRef((props, ref) => {
//   const skills = [
//     { img: html5, alt: "HTML" },
//     { img: css, alt: "CSS" },
//     { img: react, alt: "React" },
//     { img: java, alt: "Java" },
//     { img: mysql, alt: "MySQL" },
//     { img: postgres, alt: "PostgreSQL" },
//     { img: spring, alt: "Spring" },
//     { img: aws, alt: "AWS" },
//     { img: selinium, alt: "Selenium" },
//   ];

//   return (
//     <div className="skills-container" ref={ref}>
//       <h1>Skills</h1>
//       <div className="skills-grid" data-aos="fade-right">
//         {skills.map((item, index) => (
//           <div key={index} className="skill-item">
//             <img src={item.img} alt={item.alt} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default Skills;
import React from "react";
import Skill from "../../Components/Skills/Skill";
import  "../../Components/Skills/Skills.css";
import reactImg from "../../assets/Skills/react.png";
import htmlImg from "../../assets/Skills/html.png";
import cssImg from "../../assets/Skills/css.png";
import javaImg from "../../assets/Skills/java.png";
import firebase from "../../assets/Skills/firebase.png";
import nodeJSImg from "../../assets/Skills/Node.png";
import postgresql from "../../assets/Skills/Postgresql.png"
import spring from "../../assets/Skills/spring.png"
import redux from "../../assets/Skills/redux.png"
import sql from "../../assets/Skills/mysql.png"

import { motion } from "framer-motion";
const Skills = () => {
  const jsImg =
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
  const chakraImg = "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  };
  return (
    <div id="skills" >
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="SKILLS"
      >
        SKILLS
      </motion.h2>
     
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerAnimate}
      >
        
        <div >
          <Skill img={htmlImg} name={"HTML"} />
          <Skill img={cssImg} name={"CSS"} />
          <Skill img={reactImg} name={"React"} />
          <Skill img={nodeJSImg} name={"Node Js"} />
          <Skill img={redux} name={"Redux Js"} />
          <Skill img={javaImg} name={"JAVA"} />
          <Skill img={spring} name={"Spring Boot"} />
          <Skill img={sql} name={"MySQL"} />
          <Skill img={postgresql} name={"PostgreSql"} />
          <Skill img={firebase} name={"Firebase"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
