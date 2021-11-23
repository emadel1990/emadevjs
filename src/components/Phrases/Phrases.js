import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./Phrases.css";

function Phrases() {
  const [prhase, setPrhase] = useState({});

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const consultarAPi = useCallback(() => {
    axios.get("https://type.fit/api/quotes").then((response) => {
      let frases = response.data;
      let index = randomIntFromInterval(0, frases.length);
      setPrhase(frases[index]);
    });
  }, []);

  useEffect(() => {
    consultarAPi();
  }, [consultarAPi]);

  return (
    <div onClick={consultarAPi} className="phrases">
      <p className="text">{`" ${prhase.text} "`}</p>
      <p className="author">
        {prhase.author === null ? `Anonymous` : `${prhase.author}`}
      </p>
      {/* <button type="button" className="insipre">
        Inspire
      </button> */}
    </div>
  );
}

export default Phrases;
