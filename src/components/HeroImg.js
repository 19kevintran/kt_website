import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/hero.avif";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>Hi, I'm Kevin Tran</h1>
        <p>Full Stack Developer</p>
        <br></br>
        <br></br>
        <div>
          <Link to="/project" className="btn">
            {" "}
            Project
          </Link>
          <Link to="/contact" className="btn-light">
            {" "}
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
