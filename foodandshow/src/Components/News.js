import React from "react";
import "../Style/allStyle.css";
import okay123 from "../Images/okay123.jpg";
import okay1232 from "../Images/okay123_2.jpg";

const News = () => {
  return (
    <section class="latest-news">
      <div class="container">
        <h1 class="section-heading">Latest News From Blog</h1>
        <div class="article-wrapper">
          <article class="card magic-shadow-sm">
            <div>
              <img src={okay123} />
            </div>
            <div class="card-content">
              <div class="post-meta flex items-center justify-between">
                <span>Jan 03,2021</span>
                <div>
                  <span>
                    Posted By <strong>FreshMeal</strong>
                  </span>
                  <span class="comment-count">12 Comments</span>
                </div>
              </div>
              <h2>Roasted Cauliflower Burrito Bowls</h2>
              <p>
                Buddha bowls are a great example of the 'Healthy Eating Plate'
                model developed at Harvard, Debenham adds. Half the plate (or in
                this case, bowl) is made up of vegetables, a quarter
                carbohydrates and a quarter protein, making it a healthy,
                balanced meal.
              </p>
            </div>
          </article>

          <article class="card magic-shadow-sm">
            <div>
              <img src={okay1232} />
            </div>
            <div class="card-content">
              <div class="post-meta flex items-center justify-between">
                <span>Jan 03,2021</span>
                <div>
                  <span>
                    Posted By <strong>FreshMeal</strong>
                  </span>
                  <span class="comment-count">12 Comments</span>
                </div>
              </div>
              <h2>Roasted Vegetable Bowls with Green Tahini</h2>
              <p>
                Mediterranean Quinoa Bowls with Roasted Red Pepper Sauce! A mix
                of quinoa, cucumbers or kale or spinach, feta cheese, kalamata
                olives, and pepperoncini also in quinoa, roasted red peppers,
                cucumbers, feta cheese, kalamata olives, pepperoncini, red onion
              </p>
            </div>
          </article>
        </div>
        <div class="text-center btn-wrapper">
          <button class="btn btn-secondary orion">View All</button>
        </div>
      </div>
    </section>
  );
};

export default News;
