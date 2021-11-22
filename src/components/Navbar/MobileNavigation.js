import React, { useState, useEffect } from "react";
import "./mobileNavigation.css";
import NavLinks from "./NavLinks";
import { BiMenuAltRight } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

function MobileNavigation({ isOpen }) {
  const [open, setOpen] = useState(false);
  const [openStr, setOpenStr] = useState(false);

  useEffect(() => {
    if (open) {
      setOpenStr(true);
      isOpen(true);
    } else {
      setOpenStr(false);
      isOpen(false);
    }
  }, [open]);

  const menuOpen = (
    <BiMenuAltRight
      className="hamburger"
      size="40px"
      color="#64ffda"
      onClick={() => setOpen(!open)}
    />
  );
  const menuClosed = (
    <CgCloseO
      className="hamburger"
      size="40px"
      color="#64ffda"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
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
      {!open ? menuOpen : menuClosed}
      <NavLinks openStr={openStr} />
    </nav>
  );
}

export default MobileNavigation;
