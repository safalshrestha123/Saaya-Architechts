import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  
  
  

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with US</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.logopn} alt="email" />
          <a href="mailto:saaya.architects@gmail.com" className="p-text">
            saaya.architects@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +977 9860238507
          </a>
        </div>
      </div>
    

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
          <br />

          <h3 className="head-text"> Our <span>Location</span></h3>

            <iframe className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.205962439896!2d85.3352040052414!3d27.741792643894176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191f600eb739%3A0x6a5c370342ab2e57!2sSAAYA%20Architects%20and%20Consultancy!5e0!3m2!1sen!2snp!4v1688650621751!5m2!1sen!2snp"
              width="1200"
              height="450"
              style={{ border: "0" }}
              allowfullscreen="True"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
         
          {/* <SocialMedia/> */}
        </div>
        
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <MessengerCustomerChat
    pageId="107330159052462"
    appId="919635949326513"
   
  />,
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
