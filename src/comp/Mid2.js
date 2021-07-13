import React from "react";
import "./mid2.css";
import low from "../img/Low.png";
import learn from "../img/Learn.png";
import x10 from "../img/10x.png";

export default function Mid2() {
  return (
    <div className="mid2 container-fluid">
      <div className="header">
        <h2 className="header_heading">Benefits from using our apps</h2>
      </div>
      <div className="section">
        <div className="area">
          <img src={low} alt="low_png" className="svgs" />
          <h3>Low investment</h3>
          <p>
            As students invest the minimum amount and get the maximum returns
          </p>
        </div>
        <div className="area">
          <img src={x10} alt="low_png" className="svgs" />
          <h3>Low investment</h3>
          <p>Just with tiny bit of investment leading to maximum rewards</p>
        </div>
        <div className="area">
          <img src={learn} alt="low_png" className="svgs" />
          <h3>Learn & implement in real time</h3>
          <p>
            Simplied market tips in a capsule form for you to learn & implement
            in real time
          </p>
        </div>
      </div>
    </div>
  );
}
