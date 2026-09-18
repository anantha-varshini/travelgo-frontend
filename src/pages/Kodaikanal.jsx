import React from 'react'
import './Pages.css'
import kodaikanal2 from '../assets/kodaikanal2.jpg'
import { Link } from 'react-router-dom'

const Kodaikanal = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={kodaikanal2} alt="Kodaikanal" />
          </div>
    
          <div className="place-content">
            <h1>Kodaikanal</h1>
            <p>
              Kodaikanal is a beautiful hill station in the state of Tamil Nadu, India. It is located in the Palani Hills at an altitude of about 2,133 meters above sea level. Known as the "Princess of Hill Stations," Kodaikanal is famous for its cool climate, green forests, waterfalls, and scenic valleys.
            </p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>🛶 Kodaikanal Lake</li>
              <li>🌳 Coaker's Walk</li>
              <li>🪨 Pillar Rock</li>
              <li>🏞️ Bryant Park </li>
              <li>🚣🏻‍♀️ Silver Cascade Falls</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>June to September</p>
    
            <h2>Starting Package</h2>
            <p>₹2,599 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default Kodaikanal