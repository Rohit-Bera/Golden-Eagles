import React from "react";
import "../Style/allStyle.css";
import rasberry from "../Images/rasberry.png";

const Subscribe = () => {
  return (
    <section class="subscribe">
      <div class="container flex items-center">
        <div>
          <img src={rasberry} alt="rasberry" />
        </div>
        <div>
          <h1>Subscribe to Your Newsletter</h1>
          <p>
            Not ready to start your meal plan just yet? Leave us your email
            address and we will keep in touch. We’ve been known to send a
            promotion or two!
          </p>
          <div class="input-wrap">
            <input type="email" placeholder="email@freshmeal.com" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
