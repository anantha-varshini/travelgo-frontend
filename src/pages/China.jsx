import React from 'react'
import './Pages.css'
import china2 from '../assets/china2.jpg'
import { Link } from 'react-router-dom'

const China = () => {
  return (
        <section className="place-details">
        
              <div className="place-banner">
                <img src={china2} alt="China" />
              </div>
        
              <div className="place-content">
                <h1>China</h1>
                <p>China is a large country located in East Asia. It is the fourth-largest country in the world by area and the second-most populous country. Beijing is the capital city. China is known for its ancient civilization, rich cultural heritage, technological advancements, and diverse landscapes, including mountains, rivers, deserts, and forests.</p>
        
                <h2>Top Attractions</h2>
                <ul>
                  <li>🪨 Great Wall of China</li>
                  <li>🏢 Forbidden City</li>
                  <li>🪖 Terracotta Army</li>
                  <li>🌊 Li River</li>
                  <li>🌳 Zhangjiajie National Forest Park</li>
                </ul>
        
                <h2>Best Time to Visit</h2>
                <p>May to September</p>
        
                <h2>Starting Package</h2>
                <p>₹19,999 / Person</p>
        
                <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
              </div>
        
            </section>
  )
}

export default China