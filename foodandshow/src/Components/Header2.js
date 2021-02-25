import React from "react";
import "../Style/allStyle.css";
import phone from "../ICONS/phone.svg";
import logo from "../ICONS/logo.svg";
import clock from "../ICONS/clock.svg";

const Header2 = () => {
  return (
    <div className="white">
      <nav>
        <div class="top">
          <div class="container flex justify-between">
            <div class="contact flex items-center">
              <img src={phone} alt="phone" />
              <div>
                <h5>Call Us : (+91) 81414 62758</h5>
                <h6>E-mail : support@freshmeal.com</h6>
              </div>
            </div>
            <div class="branding">
              <img src={logo} alt="logo" />
            </div>
            <div class="time flex items-center">
              <img src={clock} alt="clock" />
              <div>
                <h5>Working Hours : </h5>
                <h6>Mon - Sat (8.00am - 12.00am)</h6>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- NAVBAR --> */}
        <div class="navbar magic-shadow">
          <div class="container flex justify-center">
            <a href="#" class="active">
              Home
            </a>
            <a href="#">About us</a>
            <a href="#">Products</a>
            <a href="#">Blog</a>
            <a href="#">Shop</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header2;
