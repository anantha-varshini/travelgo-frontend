import React from 'react'
import './Pages.css'
import dubai2 from '../assets/dubai2.jpg'
import { Link } from 'react-router-dom'

const Dubai = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={dubai2} alt="Dubai" />
          </div>
    
          <div className="place-content">
            <h1>Dubai</h1>
            <p>Dubai is a modern city in the United Arab Emirates. It is one of the world's most popular tourist destinations, known for its luxury lifestyle, skyscrapers, shopping malls, beautiful beaches, and desert landscapes. Dubai is famous for its rapid development, modern architecture, and world-class entertainment.</p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>🗼 Bhurj Khalifa</li>
              <li>🏛️ Dubai Mall</li>
              <li>🌇 Plum Jermiah</li>
              <li>🌊 Dubai Marina</li>
              <li>🚣🏻‍♀️ Dubai desert conservation reserve</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>November to March</p>
    
            <h2>Starting Package</h2>
            <p>₹17,999 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default Dubai