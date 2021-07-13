import React from "react";
import "./Timer.css";
import tour from "../img/Tournament design.png";

export default function Timer() {
  return (
    <div className="timer ">
      <img src={tour} alt="tour" className="timer_img" />
      <div className="timer_text">
        <h3 className="timer_h2">Can you predict the market?</h3>
        <p className="timer_para">
          Join in our tournament and compete with your friends to predict the
          market and win exciting prizes
        </p>
      </div>
      <div className="timer_btn">
        <button className="t_btn">Let’s Go!</button>
      </div>
    </div>
  );
}
