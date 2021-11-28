import { useState, useEffect, useRef } from "react";

const useHandleScroll = () => {
  const prevScrollY = useRef(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && show) {
        setShow(false);
      }
      if (prevScrollY.current > currentScrollY && !show) {
        setShow(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);
  return show;
};

export default useHandleScroll;
