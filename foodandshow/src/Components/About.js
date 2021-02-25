import React from "react";
import "../Style/allStyle.css";

import yogurt from "../Images/yogurt.png";

const About = () => {
  return (
    <div className="white">
      <section className="about-meal">
        <div className="container">
          <h1 className="section-heading">About Fresh Meal</h1>
          <div className="about-meal-wrap flex">
            <div className="flex-1">
              <img src={yogurt} alt="" />
            </div>
            <div className="flex-1">
              <h2>
                Freshmeal is a long established fact that a reader will be
                distracted .
              </h2>
              <p>
                Our meals look and taste like home cooked meals. Since we do not
                ship our meals outside of Seattle, we are able to package them
                in containers similar to a local restaurant. Other meal prep
                companies who ship nationwide have to protect their meals during
                air transit and end up feeling like a tv dinner.
              </p>
              <div>
                <button className="btn btn-secondary orion">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
