import React, { useState, useEffect } from "react";
import "./mobileNavigation.css";
import { Sling as Hamburger } from "hamburger-react";

function MobileNavigation({ setOpenStrNav }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setOpenStrNav(true);
      /* isOpen(true); */
    } else {
      setOpenStrNav(false);
      /* isOpen(false); */
    }
  }, [open, setOpenStrNav]);

  window.addEventListener(
    "resize",
    function () {
      if (this.window.innerWidth > 990) {
        setOpen(false);
      }
    },
    true
  );

  return (
    <nav className="mobileNavigation">
      <div className="hamburger-icon">
        <Hamburger toggle={() => setOpen(!open)} toggled={open} />
      </div>
      {/* <NavLinks openStr={openStr} /> */}
    </nav>
  );
}

export default MobileNavigation;
