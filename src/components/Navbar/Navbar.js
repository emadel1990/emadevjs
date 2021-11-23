import React, { useState } from "react";
import "./navbar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

function Navbar() {
  const [openStr, setOpenStrNav] = useState(false);

  return (
    <div className="navbar">
      <Link to="/home" className={openStr ? "logo desenfoque" : "logo"}>
        <p className="e noselect">E</p>
        <p className="d noselect">D</p>
      </Link>
      <div>
        <Navigation />
        <MobileNavigation setOpenStrNav={setOpenStrNav} />
      </div>
      <NavLinks openStr={openStr} />
    </div>
  );
}

export default Navbar;
