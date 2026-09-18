import React from 'react'
import './Pages.css'
import kotagiri2 from '../assets/kotagiri2.jpg'
import { Link } from 'react-router-dom'

const Kotagiri = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={kotagiri2} alt="Kotagiri" />
          </div>
    
          <div className="place-content">
            <h1>Kotagiri</h1>
            <p>Kotagiri is a beautiful hill station in the state of Tamil Nadu, India. It is located in the Nilgiri Hills at an altitude of about 1,847 meters above sea level. Kotagiri is known for its pleasant climate, lush tea plantations, forests, and scenic viewpoints. It is one of the oldest hill stations in the Nilgiris.</p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>🛶 Catherine Falls</li>
              <li>🪨 Rangaswamy Peak and Pillar</li>
              <li>🚣 Elk Falls</li>
              <li>🏔  Kodanad View Point</li>
              <li>🌸 Longwood Shola</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>June to September</p>
    
            <h2>Starting Package</h2>
            <p>₹1,599 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default Kotagiri