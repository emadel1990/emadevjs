import React, { useContext } from "react";
import BlurContext from "../../Hooks/blurContext";
import "./experience.css";

const Experience = () => {
  const blur = useContext(BlurContext);
  return (
    <div className={blur ? "exp blur fade-in" : "exp fade-in"}>
      <div className="exp-content">
        <h1>Experience coming soon....</h1>
      </div>
    </div>
  );
};

export default Experience;
