import React, { useEffect } from "react";
import "./navbar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";
import useHandleScroll from "../../Hooks/useHandleScroll";

function Navbar({ openStr, setOpenStrApp }) {
  const show = useHandleScroll();

  useEffect(() => {
    setOpenStrApp(openStr);
  }, [openStr, setOpenStrApp]);

  const goToHome = (e) => {
    e.preventDefault();
    document.getElementById("app").scrollIntoView();
  };

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
