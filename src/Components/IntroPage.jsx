import React from "react";
import "../Css/IntroPage.css";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <section className="intro-page">
      <div className="intro-overlay"></div>

      <div className="intro-content">
        <h1>Welcome to Plantify 🌱</h1>
        <p>
          Discover, learn, and care for your favorite plants. Bring nature
          closer to your home.
        </p>
        <Link to="/home"> <a  className="btn-primary">
          Explore Now
        </a></Link>
      </div>

      <img
        // src="https://cdn-icons-png.flaticon.com/512/765/765429.png"
        // alt="Plant Illustration"
        className="intro-plant"
      />
    </section>
  );
};

export default IntroPage;
