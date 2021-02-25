import React from "react";
import "../Style/allStyle.css";
import transport from "../ICONS/transport.svg";
import bag from "../ICONS/bag.svg";
import usd from "../ICONS/usd.svg";

const Service = () => {
  return (
    <div>
      <section class="our-services">
        <div class="container">
          <h1 class="section-heading">Our Services</h1>
          <div class="card-wrapper flex">
            <div class="service-card magic-shadow-sm">
              <img class="icon" src={transport} alt="" />
              <h2>Free Home Delivery</h2>
              <p>
                The ultimate in time-saving convenience, your fully-prepared
                healthy meals are delivered right to your door, at a time that
                is convenient to your busy, active lifestyle.{" "}
              </p>
              <button class="btn btn-secondary">Read More</button>
            </div>

            <div class="service-card magic-shadow-sm">
              <img class="icon" src={bag} alt="" />
              <h2 class="text-primary">ReturnServices</h2>
              <p>
                Our delivery guarantee extends only to correctly addressed
                orders. We cannot guarantee the condition of the package if the
                delivery service has to reroute.
              </p>
              <button class="btn btn-primary">Read More</button>
            </div>

            <div class="service-card magic-shadow-sm">
              <img class="icon" src={usd} alt="" />
              <h2>Money - Back </h2>
              <p>
                You are fully protected by our No-Risk Double-Guarantee.We are
                moneyback guarantee, then we'll happily refund 100% of your
                money .
              </p>
              <button class="btn btn-secondary">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
