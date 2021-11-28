import React, { useState } from "react";

function observer(options) {
  const [isVisible, setVisible] = useState(false);
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 1,
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        console.log(entry);
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  return [appearOnScroll, isVisible];
}

export default observer;
