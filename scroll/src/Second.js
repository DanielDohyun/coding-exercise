import React, { useEffect } from "react";
import "./Second.css";
import { gsap } from "gsap";

export default function Second() {
  useEffect(() => {
    gsap.utils.toArray(".second__imgContainer").forEach((section) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pinSpacer: false,
          start: "20% 60%",
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "bottom 60%",
          // end: () => "+=" + section.offsetWidth,
          scrub: true,
          // pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      // animate the container one way...
      tl.fromTo(
        section.querySelector(".afterImage"),
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      );
      // ...and the image the opposite way (at the same time)
      tl.fromTo(
        section.querySelector(".afterImage img"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );

      tl.fromTo(
        section.querySelector(".beforeImage img"),
        { autoAlpha: 1 },
        { autoAlpha: 0 }
      );
    });
  });

  return (
    <div className="second">
      <div className="second__imgContainer ">
        <div className="second__comparisonImg  beforeImage">
          <img className="second__img" src="./Benefit_1-1.svg" alt="img" />
        </div>

        <div className="second__comparisonImg  afterImage">
          <img className="second__img" src="./Benefit_1-2.svg" alt="img" />
        </div>
      </div>
      <div className="second__txts">
        <h1 className="second__h1">hi</h1>
        <h1 className="second__h1">hi</h1>
        <h1 className="second__h1">hi</h1>
      </div>
    </div>
  );
}
