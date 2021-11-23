import React, { Fragment } from "react";
import "./navLinks.css";
import { Link } from "react-router-dom";

function NavLinks({ openStr }) {
  return (
    <Fragment>
      <nav className="div-sections">
        <div className={openStr ? "background open" : "background"} />
        <ul className={openStr ? "sections open" : "sections"}>
          <li className="nav-item">
            <Link className="nav-sub-item" to="/home">
              <span className="span-nav">01.</span>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-sub-item" to="/experience">
              <span className="span-nav">02.</span>Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-sub-item" to="/work">
              <span className="span-nav">03.</span>Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-sub-item" to="/contact">
              <span className="span-nav">04.</span>Contact
            </Link>
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
