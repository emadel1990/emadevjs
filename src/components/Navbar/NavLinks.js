import React from "react";
import "./navLinks.css";

function NavLinks({ openStr }) {
  return (
    <div className="div-sections">
      <div className={openStr ? "background open" : "background"} />
      <ul className={openStr ? "sections open" : "sections"}>
        <li className="nav-item">
          <a className="nav-sub-item" href="/">
            <span className="span-nav">01.</span>About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-sub-item" href="/">
            <span className="span-nav">02.</span>Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-sub-item" href="/">
            <span className="span-nav">03.</span>Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-sub-item" href="/">
            <span className="span-nav">04.</span>Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
