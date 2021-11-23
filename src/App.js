import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Loader/Loader.css";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import { Outlet } from "react-router-dom";
import BlurContext from "./components/Hooks/blurContext";

function App() {
  const [openStr, setOpenStrApp] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 2000);
  });
  return (
    <BlurContext.Provider value={openStr}>
      <div className="app">
        <Loader />
        <Navbar setOpenStrApp={setOpenStrApp} />
        <Outlet />
      </div>
    </BlurContext.Provider>
  );
}

export default App;
