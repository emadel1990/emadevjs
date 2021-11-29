import React, { Fragment } from "react";
import "./navLinks.css";

function NavLinks({ openStr }) {
  const goTo = (e) => {
    e.preventDefault();
    const url = `${e.target.attributes[1].value}`;
    const url2 = url.replace("link", "");
    const path = document.getElementById(`${url2}`);
    if (url2 !== undefined || url2 !== null) {
      path.scrollIntoView();
    }
  };
  return (
    <Fragment>
      <nav className="div-sections">
        <div className={openStr ? "background open" : "background"} />
        <ul className={openStr ? "sections open" : "sections"}>
          <li className="nav-item">
            <div className="nav-sub-item" id="linkaboutMe" onClick={goTo}>
              <span className="span-nav" id="linkaboutMe">
                01.
              </span>
              About me
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-sub-item" id="linkexperience" onClick={goTo}>
              <span className="span-nav" id="linkexperience">
                02.
              </span>
              Experience
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-sub-item" id="linkwork" onClick={goTo}>
              <span className="span-nav" id="linkwork">
                03.
              </span>
              Work
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-sub-item" id="linkcontact" onClick={goTo}>
              <span className="span-nav" id="linkcontact">
                04.
              </span>
              Contact
            </div>
          </li>
          <li className="nav-item">
            <a
              className="resume"
              href="https://drive.google.com/file/d/1Fo4kjyxToWZ2WACnDVJ9dlOjURKfFaUz/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavLinks;
