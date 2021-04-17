import React from "react";
import "./intro.scss";
import gotVideo from "../assets/got_vid.mp4";
import { Link } from "react-router-dom";

function intro() {
  return (
    <div className="intro">
      <video className="intro__video-player" controls autoPlay>
        <source src={gotVideo} type="video/mp4" />
      </video>
      <Link to="/map">
        <button className="intro__btn">D i s c o v e r  t h e  W o r l d</button>
      </Link>
    </div >
  );
}

export default intro;
