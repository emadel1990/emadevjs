import React, { Fragment } from "react";
import "./navLinks.css";

function NavLinks({ openStr }) {
  return (
    <Fragment>
      <nav className="div-sections">
        <div className={openStr ? "background open" : "background"} />
        <ul className={openStr ? "sections open" : "sections"}>
          <li className="nav-item">
            <a className="nav-sub-item" href="#home">
              <span className="span-nav">01.</span>Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-sub-item" href="#experience">
              <span className="span-nav">02.</span>Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-sub-item" href="#work">
              <span className="span-nav">03.</span>Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-sub-item" href="#contact">
              <span className="span-nav">04.</span>Contact
            </a>
          </li>
          <li className="nav-item">
            <button type="button" className="resume">
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavLinks;
