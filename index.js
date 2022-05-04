import { useState, useLayoutEffect } from "react";

const useWindowSizes = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("orientationchange", updateWindowSize);
    window.addEventListener("load", updateWindowSize);
    window.addEventListener("reload", updateWindowSize);
    
    updateWindowSize();
    return () => {
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("orientationchange", updateWindowSize);
      window.removeEventListener("load", updateWindowSize);
      window.removeEventListener("reload", updateWindowSize);
    };
  }, []);

  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  return windowSize;
};

export { useWindowSizes };
