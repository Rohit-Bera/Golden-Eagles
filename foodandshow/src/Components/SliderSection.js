import React from "react";
import "../Style/allStyle.css";
import plate1 from "../Images/plate-1.png";
import startFilled from "../ICONS/start-filled.svg";
import cart2 from "../ICONS/cart-2.svg";
import starGrey from "../ICONS/star-grey.svg";
import plate2 from "../Images/plate-2.png";
import plate3 from "../Images/plate-3.png";
import slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  //   $(".food-slider").slick({
  //     autoplay: true,
  //     speed: 1,
  //     dots: true,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //   });

  var settings = {
    autoplay: true,
    speed: 1,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section class="top-products">
      <div class="container">
        <h1 class="section-heading">Top Products</h1>
        <div class="slider">
          <slider {...settings}>
            <div class="food-slider">
              <div class="food-card magic-shadow-sm">
                <div class="product-image flex items-center justify-center">
                  <img src={plate1} alt="" />
                </div>
                <hr />
                <div>
                  <h2 class="text-center">Summer Salad</h2>
                  <div class="stars flex justify-center items-center">
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={starGrey} alt="" />
                  </div>
                  <div class="price text-center">$ 1.25</div>
                  <div class="flex justify-center">
                    <button>
                      <img src={cart2} alt="" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="food-card magic-shadow-sm">
                <div class="product-image flex items-center justify-center">
                  <img src={plate2} alt="" />
                </div>
                <hr />
                <div>
                  <h2 class="text-center">Russian Salad</h2>
                  <div class="stars flex justify-center items-center">
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={starGrey} alt="" />
                    <img src={starGrey} alt="" />
                  </div>
                  <div class="price text-center">$ 2.36</div>
                  <div class="flex justify-center">
                    <button>
                      <img src={cart2} alt="" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="food-card magic-shadow-sm">
                <div class="product-image flex items-center justify-center">
                  <img src={plate3} alt="" />
                </div>
                <hr />
                <div>
                  <h2 class="text-center">Greek Salad</h2>
                  <div class="stars flex justify-center items-center">
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={starGrey} alt="" />
                  </div>
                  <div class="price text-center">$ 10.25</div>
                  <div class="flex justify-center">
                    <button>
                      <img src={cart2} alt="" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="food-card magic-shadow-sm">
                <div class="product-image flex items-center justify-center">
                  <img src={plate1} alt="" />
                </div>
                <hr />
                <div>
                  <h2 class="text-center">Summer Salad</h2>
                  <div class="stars flex justify-center items-center">
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={starGrey} alt="" />
                  </div>
                  <div class="price text-center">$ 55.6</div>
                  <div class="flex justify-center">
                    <button>
                      <img src={cart2} alt="" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="food-card magic-shadow-sm">
                <div class="product-image flex items-center justify-center">
                  <img src={plate2} alt="" />
                </div>
                <hr />
                <div>
                  <h2 class="text-center">Greek Salad</h2>
                  <div class="stars flex justify-center items-center">
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={starGrey} alt="" />
                    <img src={starGrey} alt="" />
                  </div>
                  <div class="price text-center">$ 6.35</div>
                  <div class="flex justify-center">
                    <button>
                      <img src={cart2} alt="" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="food-card magic-shadow-sm">
                <div class="product-image flex items-center justify-center">
                  <img src={plate3} alt="" />
                </div>
                <hr />
                <div>
                  <h2 class="text-center">Russian Salad</h2>
                  <div class="stars flex justify-center items-center">
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={startFilled} alt="" />
                    <img src={starGrey} alt="" />
                    <img src={starGrey} alt="" />
                  </div>
                  <div class="price text-center">$ 4.36</div>
                  <div class="flex justify-center">
                    <button>
                      <img src={cart2} alt="" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </slider>
        </div>
        <div class="text-center btn-wrapper">
          <button class="btn btn-secondary orion">View More</button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
