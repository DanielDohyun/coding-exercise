import React, { useEffect, useState } from "react";

export default function UseEffects() {
  const [popup, setPopup] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  //capture screen resize
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //displaying pop-ups on first visit
  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("visited") || "{}");
    // console.log(!visited)
    if (visited === {}) {
      console.log(" first time visited");
      localStorage.setItem("visited", "true");
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, []);

  //listen for refresh/browser close
  window.onbeforeunload = (e) => {
    window.localStorage.unloadTime = JSON.stringify(new Date());
  };

  window.onload = () => {
    let loadTime = new Date();
    let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
    let refreshTime = loadTime.getTime() - unloadTime.getTime();

    //display popups again only upon browser close and reopen
    if (refreshTime > 1500) {
      window.localStorage.removeItem("visited");
      localStorage.setItem("visited", "true");
      setPopup(true);
    }
  };

  return <div></div>;
}
