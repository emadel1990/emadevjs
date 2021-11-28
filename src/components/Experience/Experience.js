import React, { useContext } from "react";
import BlurContext from "../../Hooks/blurContext";
import "./Experience.css";

const Experience = () => {
  const blur = useContext(BlurContext);
  return (
    <div className={blur ? "exp blur fade-in" : "exp fade-in"}>
      <h1>HOLA MUNDO</h1>
    </div>
  );
};

export default Experience;
