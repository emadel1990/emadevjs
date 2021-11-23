import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <p className="myName noselect">Hi, my name is</p>
      <h1 className="fullName noselect">Emanuel Delgado.</h1>
      <h1 className="description noselect">
        I love to learn how to build things
      </h1>
      <p className="myDescription noselect">
        I’m a Frontend web developer and sometimes, designer.
      </p>
    </div>
  );
}

export default Home;
