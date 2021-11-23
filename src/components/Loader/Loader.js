import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div id="loader-wrapper">
      <div className="ed">
        <span className="letterE">E</span>
        <span className="letterD">D</span>
      </div>
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
}

export default Loader;
