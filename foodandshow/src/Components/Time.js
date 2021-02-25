import React from "react";
import "../Style/allStyle.css";

const Time = () => {
  return (
    <section>
      <div class="Jemish">
        <div class="container1">
          <h1 class="section-heading1 text-pure">Big Deals of the Week</h1>
          <div class="timer flex align-center justify-center margin-right1">
            <div class="margin-right margin-bottom love">
              <span class="span1">02</span>
              <span class="span2">Days</span>
            </div>
            <div class="margin-right margin-bottom love">
              <span class="span1">24</span>
              <span class="span2">Hours</span>
            </div>
            <div class="margin-right margin-bottom love">
              <span class="span1">55</span>
              <span class="span2">Minutes</span>
            </div>
            <div class="margin-right margin-bottom love">
              <span class="span1">48</span>
              <span class="span2">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
