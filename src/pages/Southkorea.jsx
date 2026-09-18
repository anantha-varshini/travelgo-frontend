import React from 'react'
import './Pages.css'
import southkorea2 from '../assets/southkorea2.jpg'
import { Link } from 'react-router-dom'

const Southkorea = () => {
  return (
     <section className="place-details">
        
              <div className="place-banner">
                <img src={southkorea2} alt="South Korea" />
              </div>
        
              <div className="place-content">
                <h1>South Korea</h1>
                <p>South Korea is a country located in East Asia, occupying the southern part of the Korean Peninsula. Its capital city is Seoul. South Korea is known for its advanced technology, rich cultural heritage, K-pop, Korean dramas, delicious cuisine, and modern cities.</p>
        
                <h2>Top Attractions</h2>
                <ul>
                  <li>🕌 Gyeongbokgung</li>
                  <li>🗼 N Seoul Tower</li>
                  <li>🏝️ Jeju island</li>
                  <li>🌊 Haeundae Beach</li>
                  <li>🌳 Bukchon Hanok Village</li>
                </ul>
        
                <h2>Best Time to Visit</h2>
                <p>June to late July</p>
        
                <h2>Starting Package</h2>
                <p>₹29,999 / Person</p>
        
                <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
              </div>
        
            </section>
  )
}

export default Southkorea