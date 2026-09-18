import React from 'react'
import vietnam2 from '../assets/vietnam2.jpg'
import './Pages.css'
import { Link } from 'react-router-dom'

const Vietnam = () => {
  return (
     <section className="place-details">
        
              <div className="place-banner">
                <img src={vietnam2} alt="Vietnam" />
              </div>
        
              <div className="place-content">
                <h1>Vietnam</h1>
                <p>Vietnam is a beautiful country located in Southeast Asia. Its capital city is Hanoi. Vietnam is known for its rich history, beautiful beaches, limestone mountains, rice terraces, vibrant cities, and delicious cuisine. It offers a perfect blend of natural beauty, cultural heritage, and modern development.</p>
        
                <h2>Top Attractions</h2>
                <ul>
                  <li>🌴 Ha Long Bay</li>
                  <li>🏙️ Hoi an ancient town</li>
                  <li>🏝️ Sapa</li>
                  <li>🌇 Ho chi minh city</li>
                  <li>🌳 Phong Nha-Ke Bang National Park</li>
                </ul>
        
                <h2>Best Time to Visit</h2>
                <p>May to October</p>
        
                <h2>Starting Package</h2>
                <p>₹27,999 / Person</p>
        
                <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
              </div>
        
            </section>
  )
}

export default Vietnam