import React from "react";
import "./aboutMe.css";
import mypicture from "../../assets/mypicture.png";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe-content">
        <div className="title">
          <p>01.</p>
          <p className="title-aboutMe">About Me</p>
          <div className="line" />
        </div>
        <div className="container-aboutMe">
          <p className="aboutMe-description">
            Hi! My friends call me Ema. My professional career start in 2015
            when i join at the college "UNAM" (National University of Misiones)
            learning computer science. Since then i start doing my own research
            about software development and discovered my true profession. I am a
            very curious person, love to learn how and why the things work, so i
            think web development exactly fit in what i was searching for. My
            true contact with Web development start in 2019, when i meet React.
            I started learning JavaScript and quickly jump to this beautifull
            library. Keep scrolling down for more information about me. Thank
            for joining me here. Let’s keep in touch!
          </p>
          <img className="mypicture" src={mypicture} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
