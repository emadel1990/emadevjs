import React, { useState, useEffect } from "react";
import "./components/Loader/loader.css";
import "./app.css";
import Loader from "./components/Loader/Loader";
import BlurContext from "./Hooks/blurContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import useInViewScroll from "./Hooks/useInViewScroll";

function App() {
  /* State for blur content */
  const [openStr, setOpenStrApp] = useState(false);
  /* State for inView sections */
  const [aboutMe, aboutMeinView] = useInViewScroll();
  const [experience, expinView] = useInViewScroll();

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
            id="aboutMe"
            ref={aboutMe}
            className={aboutMeinView ? "aboutMe appear" : "aboutMe noappear"}
          >
            <AboutMe />
          </section>
          <section
            id="experience"
            ref={experience}
            className={expinView ? "exp appear" : "exp noappear"}
          >
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
