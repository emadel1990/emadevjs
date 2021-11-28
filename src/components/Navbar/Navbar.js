import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";

function Navbar({ openStr, setOpenStrApp }) {
  /* const [openStr, setOpenStrNav] = useState(false); */
  const prevScrollY = useRef(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setOpenStrApp(openStr);
  }, [openStr, setOpenStrApp]);

  const goToHome = (e) => {
    e.preventDefault();
    document.getElementById("app").scrollIntoView();
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && show) {
        setShow(false);
      }
      if (prevScrollY.current > currentScrollY && !show) {
        setShow(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <div className={show ? "navbar" : "navbar hidde"}>
      <div
        onClick={(e) => goToHome(e)}
        className={openStr ? "logo desenfoque" : "logo"}
      >
        <p className="e noselect">E</p>
        <p className="d noselect">D</p>
      </div>
      <div>
        <Navigation />
        <MobileNavigation setOpenStrNav={setOpenStrApp} openStr={openStr} />
      </div>
      <NavLinks openStr={openStr} />
    </div>
  );
}

export default Navbar;
