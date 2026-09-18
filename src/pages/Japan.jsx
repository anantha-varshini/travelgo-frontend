import React from 'react'
import japan2 from '../assets/japan2.jpg'
import './Pages.css'
import { Link } from 'react-router-dom'

const Japan = () => {
  return (
    <section className="place-details">
        
              <div className="place-banner">
                <img src={japan2} alt="Japan" />
              </div>
        
              <div className="place-content">
                <h1>Japan</h1>
                <p>Japan is an island country located in East Asia. Its capital city is Tokyo. Japan is known for its rich cultural heritage, advanced technology, beautiful landscapes, cherry blossoms, and traditional arts. It is famous for its blend of ancient traditions and modern innovation.</p>
        
                <h2>Top Attractions</h2>
                <ul>
                  <li>⛰️ Mount Fiji</li>
                  <li>🌲 Tokyo Skytree</li>
                  <li>🌇 Fushimi inari taisha</li>
                  <li>🕌 Osaka Castle</li>
                  <li>🌳 Hiroshima peace memorial park</li>
                </ul>
        
                <h2>Best Time to Visit</h2>
                <p>June to July</p>
        
                <h2>Starting Package</h2>
                <p>₹28,999 / Person</p>
        
                <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
              </div>
        
            </section>
  )
}

export default Japan