import React, { useState } from "react";
import "./navbar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  const [open, isOpen] = useState(false);

  return (
    <div className="navbar1">
      <div className={open ? "logo desenfoque" : "logo"}>
        <p className="e noselect">E</p>
        <p className="d noselect">D</p>
      </div>
      <div>
        <Navigation />
        <MobileNavigation isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Navbar;
