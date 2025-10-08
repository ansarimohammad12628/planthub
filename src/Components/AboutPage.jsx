import React from "react";
import "../Css/AboutPage.css";

import manphoto from "../Images/JPG/manphoto.jpg"

const AboutPage = () => {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Plantify 🌿</h1>
        <p>
          Plantify is your one-stop destination for bringing nature into your home. 
          From indoor plants to decorative greens, we carefully curate a collection 
          that adds beauty, purifies the air, and uplifts your space.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make plant ownership simple and enjoyable. We strive 
          to educate, inspire, and help everyone cultivate green spaces at home, 
          promoting wellness and a sustainable lifestyle.
        </p>
      </div>

      {/* Vision Section */}
      <div className="about-section vision">
        <h2>Our Vision</h2>
        <p>
          To create a greener world, one plant at a time. We envision homes and offices 
          filled with natural beauty and cleaner air, making nature accessible to everyone.
        </p>
      </div>

      {/* Features Section */}
      <div className="about-section features">
        <h2>Why Choose Plantify?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Curated Collection</h3>
            <p>Handpicked plants that are easy to grow and maintain.</p>
          </div>
          <div className="feature-card">
            <h3>Plant Care Tips</h3>
            <p>Detailed guides to help your plants thrive indoors.</p>
          </div>
          <div className="feature-card">
            <h3>Eco-Friendly Packaging</h3>
            <p>Sustainable materials to deliver your plants safely.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-section team">
        <h2>Meet Our Team</h2>
        <p>
          Our passionate team loves plants as much as you do. From botanists to customer care, 
          we ensure every plant reaches you healthy and happy.
        </p>
        <div className="team-container">
          <div className="team-member">
          <img src={manphoto} alt="Team Member" />
            <h4>Jane Doe</h4>
            <p>Founder & Botanist</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80" alt="Team Member" />
            <h4>John Smith</h4>
            <p>Plant Expert</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80" alt="Team Member" />
            <h4>Emma Brown</h4>
            <p>Customer Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
