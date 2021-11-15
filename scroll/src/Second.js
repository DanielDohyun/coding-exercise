import React from "react";
import "./Second.css";

export default function Second(inViewport) {
  return (
    <div className="second">
      {/* <img className="second__1" src="./Toki_Desktop_Header.svg" alt="img" /> */}
      <div></div>
      <div className="second__imgContainer">
        <img
          className="second__img"
          src="./Toki_Desktop_Header.svg"
          alt="img"
        />
        <img
          className="second__img"
          src="./Toki_Desktop_Header.svg"
          alt="img"
        />
        <img
          className="second__img"
          src="./Toki_Desktop_Header.svg"
          alt="img"
        />
      </div>
      <div className="second__txts">
        <h1 className="second__h1">hi</h1>
        <h1 className="second__h1">hi</h1>
        <h1 className="second__h1">hi</h1>
      </div>
    </div>
  );
}
