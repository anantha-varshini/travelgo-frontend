import React from 'react'
import './Pages.css'
import india2 from '../assets/india2.jpg'
import { Link } from 'react-router-dom'

const India = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={india2} alt="India" />
          </div>
    
          <div className="place-content">
            <h1>India</h1>
            <p>India is a vast and diverse country located in South Asia. It is the seventh-largest country in the world by area and the most populous country. New Delhi is the capital, and India is known for its rich history, cultural diversity, languages, traditions, and festivals. The country has a wide variety of landscapes, including the Himalayas, deserts, forests, rivers, beaches, and fertile plains.</p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>🕌 Taj Mahal</li>
              <li>🏛️ Hawa Mahal</li>
              <li>🌊 Goa Beach</li>
              <li>🛕 Thanjavur Big Temple</li>
              <li>🚣🏻‍♀️ Kerala-Backwaters</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>June to September</p>
    
            <h2>Starting Package</h2>
            <p>₹9,999 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default India