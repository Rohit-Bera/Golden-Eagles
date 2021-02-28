import React from "react";
import facebook from "../ICONS/facebook.svg";
import twitter from "../ICONS/twitter.svg";
import google from "../ICONS/google.svg";
import instagram from "../ICONS/instagram.svg";
import search from "../ICONS/search.svg";
import user from "../ICONS/user-icon.svg";
import edit from "../ICONS/edit.svg";
import "../Style/allStyle.css";

import { Link, link } from "react-router-dom";

import Header2 from "./Header2";
import MainSection from "./MainSection";
import Slider from "./SliderSection";
import About from "./About";
import Service from "./Services";
import Time from "./Time";
import News from "./News";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import Footer from "./Footer";
import Feedback from "./Feedback";

const Header = () => {
  const style = {
    display: "flex",
  };

  return (
    <div>
      <header class="topbar">
        <div class="container flex justify-between items-center">
          <div class="icons">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={google} alt="google" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={search} alt="search" />
            </a>
          </div>
          <div class="auth flex items-center">
            <div>
              <Link to="/login" style={style}>
                <img src={user} alt="user" />
                <p>Log-In</p>
              </Link>
            </div>
            <span class="divider">|</span>
            <div>
              <Link to="/signUp" style={style}>
                <img src={edit} alt="user" />
                <p>Sign-Up</p>
              </Link>
            </div>
            <span class="divider">|</span>
            <div>
              <Link to="/feedBack" style={style}>
                <img src={edit} alt="user" />
                <p>Feedback</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Header2 />
      <MainSection />
      <Slider />
      <About />
      <Service />
      <Time />
      <News />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Header;
