import React from "react";
import "../Style/allStyle.css";
import logo2 from "../ICONS/logo-2.svg";
import vegies from "../Images/vegies.png";

const MainSection = () => {
  return (
    <div className="white">
      <header className="hero flex items-center">
        <div className="container">
          <div className="welcome flex items-center">
            <span>Welcome to</span>
            <img src={logo2} alt="logo2" />
          </div>
          <h1>
            The World Best <span>Shoping</span> Website
          </h1>
          <p>
            Freshmeal is a home meal delivery service that features nutrient
            rich ingredients You can place your order and receive it within 48
            hours , delivered in coolers to keep it fresh !
          </p>
          <div className="rohit">
            <button className="btn btn-primary mortal">Read More</button>
            <button className="btn btn-secondary mortal">Shop Now</button>
          </div>
          <div className="hero-image">
            <img src={vegies} alt="vegies" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainSection;
