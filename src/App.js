import React, { useEffect } from "react";
import "./App.css";
import "./components/Loader/Loader.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 2000);
  });
  return (
    <div className="app">
      <div id="loader-wrapper">
        <div className="ed">
          <span className="letterE">E</span>
          <span className="letterD">D</span>
        </div>
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
