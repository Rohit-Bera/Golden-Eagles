import React from "react";
import "../Style/allStyle.css";
import phone from "../ICONS/phone-2.svg";
import bag from "../ICONS/bag-2.svg";
import clock from "../ICONS/clock-2.svg";

const Contact = () => {
  const contactStyle = {
    border: 0,
  };
  return (
    <div className="white">
      <section class="contact-us flex">
        <div class="contact-info-wrapper">
          <h1 class="section-heading">Contact Us</h1>
          <div class="contact-info">
            <div>
              <div>
                <img src={phone} alt="phone" />
                <div>
                  <span>Call Us:-</span>
                  <span>(+91) 814 146 2758</span>
                </div>
              </div>

              <div>
                <img src={bag} alt="bag" />
                <div>
                  <span>E-mail:-</span>
                  <span>support@freshmeal.com</span>
                </div>
              </div>

              <div>
                <img src={clock} alt="clock" />
                <div>
                  <span>Working Hours:-</span>
                  <span>Mon - Sat (8.00am - 12.00am)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.6372769839!2d72.68220872067587!3d21.15946270350131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1611144660402!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            style={contactStyle}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
