import React, { useEffect } from "react";
import "./navbar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";

function Navbar({ openStr, setOpenStrApp }) {
  /* const [openStr, setOpenStrNav] = useState(false); */

  useEffect(() => {
    setOpenStrApp(openStr);
  }, [openStr, setOpenStrApp]);

  return (
    <div className="navbar">
      <a href="#home" className={openStr ? "logo desenfoque" : "logo"}>
        <p className="e noselect">E</p>
        <p className="d noselect">D</p>
      </a>
      <div>
        <Navigation />
        <MobileNavigation setOpenStrNav={setOpenStrApp} openStr={openStr} />
      </div>
      <NavLinks openStr={openStr} />
    </div>
  );
}

export default Navbar;
