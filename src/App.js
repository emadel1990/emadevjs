import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Loader/Loader.css";
import Loader from "./components/Loader/Loader";
import BlurContext from "./Hooks/blurContext";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

function App() {
  /* State for */
  const [openStr, setOpenStrApp] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    rootMargin: "70%",
  });

  useEffect(() => {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 2000);
  });

  const handleClick = (e) => {
    if (e.target.className !== "background open") {
      setOpenStrApp(false);
    }
  };

  return (
    <BlurContext.Provider value={openStr}>
      <div className="app" id="app" onClick={(e) => handleClick(e)}>
        <Loader />
        <Navbar setOpenStrApp={setOpenStrApp} openStr={openStr} />
        <div className="sections-content">
          <section id="home">
            <Home />
          </section>
          <section
            id="experience"
            ref={ref}
            className={inView ? "exp appear" : "exp noappear"}
          >
            {/* <h1>HOLA</h1> */}
            <Experience />
          </section>
          <section id="work"></section>
          <section id="contact"></section>
        </div>
        <Footer />
      </div>
    </BlurContext.Provider>
  );
}

export default App;
