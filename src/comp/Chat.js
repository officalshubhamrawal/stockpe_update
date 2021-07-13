import React from "react";
import "./Chat.css";
import need from "../img/Need.svg";
import Customer from "../img/Customer.svg";

export default function Chat() {
  return (
    <div className="chat container-fluid">
      <div className="header">
        <h2 className="header_heading">Get our support 24 X 7 </h2>
      </div>
      <div className="svg_area">
        <img src={need} alt="need" className="need_svg" />
        <img src={Customer} alt="need" className="customer_svg" />
      </div>
    </div>
  );
}
