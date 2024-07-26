import React from "react";
import "../../Components/Skills/Skills.css";
import { motion } from "framer-motion";

const Skill = ({ img, name }) => {
  const cardAnimate = {
    offscreen: { y: 0 },
    onView: {},
    onscreen: {
      y: -20,
      transition: { duration: 0.08 },
    },
  };
  const imgAnimate = {
    offscreen: { y:+30,opacity:0 },
    onscreen: {
      y: 0,
      opacity:1,
      transition: { duration: 1},
    },
  };
  return (
    <motion.div
      
      initial={"offscreen"}
      whileInView={"onView"}
      whileHover={"onscreen"}
      variants={cardAnimate}
    >
      <div >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={imgAnimate}
        >
          <img className='skills-card-img' src={img} alt="" />
        </motion.div>
        <h3 className='skills-card-name'>{name}</h3>
      </div>
    </motion.div>
  );
};

export default Skill;
