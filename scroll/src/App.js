import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { useIntersection } from "./useIntersection";
import Second from "./Second";
import handleViewport from "react-in-viewport";

const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;
  const color = inViewport ? "#217ac0" : "#ff9800";
  const text = inViewport ? "In viewport" : "Not in viewport";
  return (
    <div className="viewport-block" ref={forwardedRef}>
      {/* <h3>{ text }</h3>
      <div style={{ width: '400px', height: '300px', background: color }} /> */}
      <Second inViewport={inViewport} />
    </div>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

function App() {
  const ref = useRef();

  // const inViewport = useIntersection(ref, "-200px");
  // console.log(ref);
  const third = document.querySelector(".app__third");
  const inViewport = useIntersection(third, "0px");
  if (inViewport) {
    console.log("in viewport:", third);
  }

  const [visited, setVisited] = useState(false);
  useEffect(() => {
    localStorage.setItem("visited", "true");
    // console.log("set true");
  });

  //runs once at the first render
  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("visited"));
    if (visited) {
      setVisited(true);
      console.log(visited);
    }
  }, []);

  // window.addEventListener("beforeunload", function (event) {
  //   localStorage.clear();
  // });

  window.onbeforeunload = function () {
    localStorage.clear();
  };

  const calculateTimeLeft = () => {
    let difference = +new Date(`2021-11-21`) - +new Date();

    //add offset to hours => to get user's local time
    const offset = +new Date().getTimezoneOffset() / 60;

    // console.log(typeof offset);
    // console.log(offset);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60) + offset) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="app">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      {!visited && <div className="app__first"></div>}
      {visited && <h1>hi</h1>}
      <ViewportBlock
        onEnterViewport={() => console.log("enter")}
        onLeaveViewport={() => console.log("leave")}
      />
      <div ref={ref} className="app__third"></div>
    </div>
  );
}

export default App;
