import React from "react";
import "../Style/feedbackStyle.css";

const Feedback = () => {
  return (
    <div>
      <div class="orion-rb">
        <form>
          <h1 className="h1">Give your Feedback</h1>
          <div class="id-orion">
            <input
              type="text"
              placeholder="Full name"
              className="input-orion"
            />
            <i class="far fa-user"></i>
          </div>
          <div class="id-orion">
            <input
              type="email"
              placeholder="Email address"
              className="input-orion"
            />
            <i class="far fa-envelope"></i>
          </div>
          <textarea
            cols="15"
            rows="5"
            placeholder="Enter your opinions here.."
            className="textarea-orion"
          ></textarea>
          <button className="orion-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
