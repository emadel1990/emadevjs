import React, { useEffect } from "react";
import "./App.css";
import "./components/Loader/Loader.css";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import { Outlet } from "react-router-dom";

function App() {
  /*  const [openStr, setOpenStrApp] = useState(false); */

  useEffect(() => {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 2000);
  });
  return (
    <div className="app">
      <Loader />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
