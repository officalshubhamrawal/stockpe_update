import React from "react";
import "./footer.css";
import logo from "../img/StockPe.png";
import btn from "../img/button.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import insta from "../img/instagram.png";
export default function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="header">
        <img src={logo} alt="logo" className="footer_logo" />
      </div>
      <div className="text__area">
        <div className="about">
          <h3>About</h3>
          <p className="footer_para">
            With The Vision To Make Stock Trading Accessible To Students. We Are
            Creating A New Era Of Financially Educated Students In India.
          </p>
        </div>
        <div className="touch">
          <h3>Get In Touch </h3>
          <p className="footer_para1">
            Questions or feedbacks? We would love to hear from you
          </p>
          <div className="email_area">
            <h4>Email us at</h4>
            <a
              href="mailto:Hello@stockpe.tech"
              target="_blank"
              rel="noreferrer"
            >
              Hello@stockpe.tech
            </a>
          </div>
        </div>
        <div className="btn_area">
          <h3>Get Our app</h3>
          <a href="#">
            <img src={btn} alt="btn" />
          </a>
        </div>
        <div className="social_media">
          <h3>Social media</h3>
          <img src={facebook} alt="btn" />
          <img src={insta} alt="btn" />
          <img src={twitter} alt="btn" />
        </div>
      </div>
    </div>
  );
}
