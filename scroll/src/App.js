import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import Second from "./Second";
import { gsap } from "gsap";

function App() {
  const headerRef = useRef(null);
  const ref = useRef();
  const [background, setBackground] = useState("black");

  const toggleBackground = () => {
    const color = background !== "black" ? "blue" : "green";
    setBackground(color);
  };

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      background: background,
      ese: "none",
    });
  }, [background]);

  useEffect(() => {
    console.log(headerRef);
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
  }, [headerRef]);

  return (
    <div className="app">
      <div className="app__first" ref={headerRef}>
        <button onClick={toggleBackground}>toggle background</button>
      </div>
      <Second />
      <div className="app__third"></div>
    </div>
  );
}

export default App;
