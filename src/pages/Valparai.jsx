import React from 'react'
import './Pages.css'
import valparai2 from '../assets/valparai2.jpg'
import { Link } from 'react-router-dom'

const Valparai = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={valparai2} alt="Valparai" />
          </div>
    
          <div className="place-content">
            <h1>Valparai</h1>
            <p>Valparai is a beautiful hill station in the state of Tamil Nadu, India. It is located in the Anamalai Hills at an altitude of about 1,193 meters above sea level. Valparai is famous for its lush tea estates, dense forests, waterfalls, wildlife, and cool climate.</p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>🏞️ Solayar Dam</li>
              <li>⛰️ Nallamudi Viewpoint</li>
              <li>🚣🏻‍♀️ Aliyar Dam</li>
              <li>🌴 Monkey Falls</li>
              <li>🛕 Balaji Temple</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>June to September</p>
    
            <h2>Starting Package</h2>
            <p>₹2,499 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default Valparai