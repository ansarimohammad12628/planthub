import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h2>Plantify 🌱</h2>
          <p>
            Bringing nature closer to you. Discover, learn, and care for your
            favorite plants with ease.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <p>Get weekly plant care tips & updates!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Plantify. All Rights Reserved 🌿</p>
      </div>
    </footer>
  );
};

export default Footer;
