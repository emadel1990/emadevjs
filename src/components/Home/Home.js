import React, { useContext } from "react";
import BlurContext from "../../Hooks/blurContext";
import "./home.css";

function Home() {
  const blur = useContext(BlurContext);

  return (
    <div className={blur ? "home blur" : "home"}>
      <div className="home-content">
        <div className="my-description">
          <p className="myName noselect">Hi, my name is</p>
          <h1 className="fullName noselect">Emanuel Delgado.</h1>
          <h1 className="description noselect">
            I love to learn how to build things
          </h1>
          <p className="myDescription noselect">
            I’m a Frontend web developer and sometimes, designer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
