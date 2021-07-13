import React from "react";
import "./card.css";
function Card1() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className="home_h1">
          Open a Stock<span>Pe</span> Learning Account
        </h1>
        <p className="home_p">
          Instantly buy or sell stock token with just a click of a button.
        </p>
      </div>
    </div>
  );
}

export default Card1;
