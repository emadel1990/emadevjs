import React, { useState } from "react";
import "./navbar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  const [open, isOpen] = useState(false);
  const estilo = {
    desenfoque: {
      filter: "blur(2px)",
    },
    sindesenfoque: {
      filter: "blur(0px)",
    },
  };
  return (
    <div className="navbar1">
      <div
        className="logo"
        style={open ? estilo.desenfoque : estilo.sindesenfoque}
      >
        {/* <img src={logo} alt="logo" className="logo"></img> */}
        <p className="e">E</p>
        <p className="d">D</p>
      </div>
      <div>
        <Navigation />
        <MobileNavigation isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Navbar;
