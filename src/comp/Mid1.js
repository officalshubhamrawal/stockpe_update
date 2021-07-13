import React from "react";
import "./mid1.css";
import tour from "../img/Tournament.png";
import imp from "../img/implement.png";
import reward from "../img/Rewards.png";
import withdraw from "../img/with.png";
import arrow from "../img/Arrow.png";

export default function Mid1() {
  return (
    <div className="mid1 container-fluid">
      <div className="header1">
        <h2 className="header_heading">How does StockPe work?</h2>
        <div className="section1">
          <div className="area1">
            <img src={tour} alt="low_png" className="svgs" />
            <h3>
              Enter into <br />
              tournament
            </h3>
            <p>Tournament will help you learn the basics of stock market</p>
          </div>
          <img src={arrow} alt="arrow" className="arrow_svg" />
          <div className="area1">
            <img src={imp} alt="low_png" className="svgs" />
            <h3>
              Learn and <br />
              implement
            </h3>
            <p>
              Get simplified market tips and test out your hypothesis into the
              game
            </p>
          </div>
          <img src={arrow} alt="arrow" className="arrow_svg" />
          <div className="area1">
            <img src={reward} alt="low_png" className="svgs" />
            <h3>Unbelievable returns</h3>
            <p>win 10x 20x prize and ace the leaderboard</p>
          </div>
          <img src={arrow} alt="arrow" className="arrow_svg" />
          <div className="area1">
            <img src={withdraw} alt="low_png" className="svgs" />
            <h3>
              Easy
              <br />
              withdraw
            </h3>
            <p>You can withdraw anytime or stay and learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
