import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-left">
           <h1>YumYard</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              adipisci deserunt sed repellat iusto suscipit non molestiae
              debitis nesciunt eveniet?
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-896</li>
              <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 @zoto.com - All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
