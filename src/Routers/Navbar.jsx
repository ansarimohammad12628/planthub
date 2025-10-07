import React, { useState, useEffect } from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "sticky" : ""}`}>
      <div className="nav-container">
        {/* Left Side: Logo */}
        <div className="nav-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/765/765401.png"
            alt="Plantify Logo"
          />
          <h2>Plantify</h2>
        </div>

        {/* Right Side: Menu Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

            
          <Link to="/"><a > </a></Link>
          <Link to="/home"><a>Home</a></Link>
          <Link  to="/about"><a>About </a></Link>
          <Link to="/contact"><a>Contact </a></Link>
          <Link to="/login"><a>Login </a></Link>
         
        
        </nav>

        {/* Mobile Menu Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
