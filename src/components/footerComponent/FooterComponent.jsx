import React from "react";
import "../footerComponent/FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4 className="footer-title">CUSTOMER SERVICE</h4>
        <ul className="footer-links">
          <li>
            <a href="/">Help & Contact Us</a>
          </li>
          <li>
            <a href="/">Returns & Refunds</a>
          </li>
          <li>
            <a href="/">Online Stores</a>
          </li>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">COMPANY</h4>
        <ul className="footer-links">
          <li>
            <a href="/">What We Do</a>
          </li>
          <li>
            <a href="/">Available Services</a>
          </li>
          <li>
            <a href="/">Latest Posts</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">SOCIAL MEDIA</h4>
        <ul className="footer-links">
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Tumblr</a>
          </li>
          <li>
            <a href="/">Pinterest</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">PROFILE</h4>
        <ul className="footer-links">
          <li>
            <a href="/">My Account</a>
          </li>
          <li>
            <a href="/">Checkout</a>
          </li>
          <li>
            <a href="/">Order Tracking</a>
          </li>
          <li>
            <a href="/">Help & Support</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
