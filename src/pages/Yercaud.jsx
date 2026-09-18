import React from 'react'
import './Pages.css'
import yercaud2 from '../assets/yercaud2.jpg'
import { Link } from 'react-router-dom'

const Yercaud = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={yercaud2} alt="Yercaud" />
          </div>
    
          <div className="place-content">
            <h1>Yercaud</h1>
            <p>
              Yercaud is a beautiful hill station in the state of Tamil Nadu, India. It is located in the Shevaroy Hills at an altitude of about 1,515 meters above sea level. Known as the "Jewel of the South," Yercaud is famous for its pleasant climate, coffee plantations, orange groves, and scenic viewpoints.
            </p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>🛶 Yercaud Lake</li>
              <li>🪨 Lady's Seat</li>
              <li>⛰️ Pagoda Point</li>
              <li>🏞️ Killiyur Falls</li>
              <li>🛕 Shevaroy Temple</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>June to September</p>
    
            <h2>Starting Package</h2>
            <p>₹1,999 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default Yercaud