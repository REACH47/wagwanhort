import React from "react";
import { motion } from 'framer-motion';
import Face from "../assets/jbarsonface.png";
import "./jbarsonface.scss";
import { Link } from "react-router-dom";


const bounceTransition = {
  y: {
    duration: .8,
    yoyo: Infinity,
    ease: 'easeOut'
  }
};

function jbarsonface() {
  return (
    <>
      <main className="container">
        <motion.img
          className="container__face" src={Face} alt="mr. jonathan barson"
          transition={bounceTransition} animate={{
            y: ["25%", "-20%"]
          }} />

      </main>
      <Link to="/intro">
        <button className="container__button">W A G W A N, <br /> C L I C K M E</button>
      </Link>
    </>
  );
}

export default jbarsonface;
