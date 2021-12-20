import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Second from "./Second";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "title 1",
    subtitle: "sub 1",
  },
  {
    title: "title 2",
    subtitle: "sub 2",
  },
  {
    title: "title 3",
    subtitle: "sub 3",
  },
];

function App() {
  const headerRef = useRef(null);
  const revealsRefs = useRef([]);
  revealsRefs.current = [];
  const [background, setBackground] = useState("black");

  const toggleBackground = () => {
    const color = background !== "black" ? "blue" : "green";
    setBackground(color);
  };

  // useEffect(() => {
  //   gsap.to(headerRef.current, {
  //     duration: 1,
  //     background: background,
  //     ese: "none",
  //   });
  // }, [background]);

  useEffect(() => {
    console.log(headerRef);
    console.log(headerRef.current);
  }, [headerRef]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });

    revealsRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${i + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            marks: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    // console.log(el);
    if (el && !revealsRefs.current.includes(el)) {
      revealsRefs.current.push(el);
    }
    // console.log(revealsRefs.current);
  };

  return (
    <div className="app">
      <div className="app__first">
        <button onClick={toggleBackground}>toggle background</button>
      </div>
      <Second ref={headerRef} />
      <div className="app__third">
        {sections.map(({ title, subtitle }) => {
          return (
            <div key={title} className="app__section" ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
