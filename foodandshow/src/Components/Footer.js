import React from "react";
import "../Style/allStyle.css";
import facebook from "../ICONS/facebook.svg";
import twitter from "../ICONS/twitter.svg";
import google from "../ICONS/google.svg";
import instagram from "../ICONS/instagram.svg";
import foodTable from "../Images/food-table.jpg";
import coffee from "../Images/coffee.jpg";
import jar from "../Images/jars.jpg";
import salad from "../Images/salad-table.jpg";
import donut from "../Images/donut.jpg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="box">
            <h3>About us</h3>
            <p>
              We Provide Water, carbohydrates, fat, protein, vitamins, and
              minerals are the key nutrients that make up a healthy, balanced
              diet.
            </p>
            <button class="btn btn-secondary">Read More</button>
          </div>
          <div class="box">
            <h3>Quik Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="box">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={google} alt="Google" />
                  <span>Google +</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="box instagram-api">
            <h3>Instagram</h3>
            <div class="post-wrap">
              <div>
                <img src={foodTable} alt="Food-Table" />
              </div>
              <div>
                <img src={coffee} alt="coffee" />
              </div>
              <div>
                <img src={foodTable} alt="food-Table" />
              </div>
              <div>
                <img src={jar} alt="Jars" />
              </div>
              <div>
                <img src={salad} alt="Salad" />
              </div>
              <div>
                <img src={donut} alt="Donut" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer class="copyright">
        <div>
          Copyright @ 2020 . All rights reserved by{" "}
          <a href="#">Coder's Bird.</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
