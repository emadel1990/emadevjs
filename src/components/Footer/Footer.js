import React from "react";
import "./Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <ul className="ul-left">
          <li className="icon linkedin">
            <a
              href="https://www.linkedin.com/in/emadevjs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsLinkedin size={22} />
            </a>
          </li>
          <li className="icon github">
            <a
              href="https://github.com/emadel1990"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsGithub size={22} />
            </a>
          </li>
          <li className="icon instagram">
            <a
              href="https://www.instagram.com/emaaadelgado"
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiInstagramFill size={25} />
            </a>
          </li>
          <li className="icon twitter">
            <a
              href="https://twitter.com/emaaadelgado"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImTwitter size={22} />
            </a>
          </li>
        </ul>
        <div className="left-line" />
      </div>
      <div className="footer-right">
        <div className="email">
          <a
            className="email-p"
            href="mailto:emadevjs@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            emadevjs@gmail.com
          </a>
        </div>
        <div className="right-line" />
      </div>
    </div>
  );
}

export default Footer;
