import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Travel-Go</h2>
          <p>
            Explore the world with us. Discover beautiful destinations,
            affordable packages, and unforgettable travel experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Destinations</h3>

          <Link to="/india">India</Link>
          <Link to="/destinations">Hill stations</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Coimbatore, Tamil Nadu, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ travelgo@gmail.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Travel-Go. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;