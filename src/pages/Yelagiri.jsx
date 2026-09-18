import React from 'react'
import './Pages.css'
import yelagiri2 from '../assets/yelagiri2.jpg'
import { Link } from 'react-router-dom'

const Yelagiri = () => {
  return (
    <section className="place-details">
    
          <div className="place-banner">
            <img src={yelagiri2} alt="Yelagiri" />
          </div>
    
          <div className="place-content">
            <h1>Yelagiri</h1>
            <p>Yelagiri is a peaceful hill station in the state of Tamil Nadu, India. It is located in the Eastern Ghats at an altitude of about 1,110 meters above sea level. Yelagiri is known for its pleasant climate, green hills, orchards, and peaceful surroundings, making it an ideal destination for nature lovers and adventure enthusiasts.</p>
    
            <h2>Top Attractions</h2>
            <ul>
              <li>⛰️ Swamimalai Hill</li>
              <li>🛶 Jalagamparai Falls</li>
              <li>🚣 Punganoor Lake</li>
              <li>🌳 Government Herbal Farm</li>
              <li>🌴 Nature Park</li>
            </ul>
    
            <h2>Best Time to Visit</h2>
            <p>June to September</p>
    
            <h2>Starting Package</h2>
            <p>₹1,299 / Person</p>
    
            <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
          </div>
    
        </section>
  )
}

export default Yelagiri