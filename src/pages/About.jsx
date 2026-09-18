import React from "react";
import "./Pages.css";
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.jpg'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-page">

      <div className="about-hero">
        <h1>About Travel-Go</h1>
        <p>
          Travel-Go is your trusted travel companion, helping you discover
          beautiful destinations, affordable packages, and unforgettable
          experiences around the world.
        </p>
      </div>

      <div className="founder">
        <div className="founder-img">
          👩‍💻
        </div>

        <div className="founder-content">
          <h2>Meet the Founder</h2>
          <h3>Anantha Varshini</h3>

          <p>
            Hello! I'm <b>Anantha Varshini</b>, the creator of Travel-Go.
            I developed this travel website to provide travelers with a
            simple and user-friendly platform where they can explore
            destinations, discover exciting packages, and plan memorable
            vacations with ease.
          </p>
        </div>
      </div>


      <h2 className="section-title">Why Choose Us?</h2>

      <div className="features">

        <div className="feature-card">
          <h3>🌍 Best Destinations</h3>
          <p>Explore handpicked destinations across India and the world.</p>
        </div>

        <div className="feature-card">
          <h3>💰 Affordable Packages</h3>
          <p>Travel with budget-friendly and premium tour packages.</p>
        </div>

        <div className="feature-card">
          <h3>📞 24/7 Support</h3>
          <p>We're always here to help make your trip stress-free.</p>
        </div>

      </div>


      <h2 className="section-title">Customer Reviews</h2>

      <div className="reviews">

        <div className="review-card">
          ⭐⭐⭐⭐⭐
          <p>
            "The booking process was super easy and the trip was unforgettable!"
          </p>
          <h4>- Priya S.</h4>
        </div>

        <div className="review-card">
          ⭐⭐⭐⭐⭐
          <p>
            "Affordable packages and excellent customer service."
          </p>
          <h4>- Rahul K.</h4>
        </div>

        <div className="review-card">
          ⭐⭐⭐⭐☆
          <p>
            "Beautiful destinations and wonderful travel experience!"
          </p>
          <h4>- Ananya M.</h4>
        </div>

      </div>


      <h2 className="section-title">Memorable Moments</h2>

      <div className="gallery">

        <img src={about1}/>
        <img src={about2}/>
        <img src={about3}/>
        <img src={about4}/>
        <Link to="/gallery"><button className="book-btn">See More</button></Link>
      </div>


      <div className="cta">

        <h2>Ready for Your Next Adventure?</h2>

        <p>
          Explore exciting destinations and create unforgettable memories
          with Travel-Go.
        </p>

        <Link to="/bookings"><button>Book Your Trip</button></Link>

      </div>

    </section>
  );
};

export default About;