import React from 'react'
import './Pages.css'
import ooty2 from '../assets/ooty2.jpg'
import { Link } from 'react-router-dom';

const Ooty = () => {
  return (
    <section className="place-details">

      <div className="place-banner">
        <img src={ooty2} alt="Ooty" />
      </div>

      <div className="place-content">
        <h1>Ooty</h1>
        <p>
          Ooty, also known as the Queen of Hill Stations, is one of the most
          beautiful tourist destinations in Tamil Nadu. It is famous for its
          pleasant climate, tea plantations, lakes, and breathtaking mountain
          views.
        </p>

        <h2>Top Attractions</h2>
        <ul>
          <li>🌿 Government Botanical Garden</li>
          <li>🚂 Nilgiri Mountain Railway</li>
          <li>🚣 Ooty Lake</li>
          <li>🏔 Doddabetta Peak</li>
          <li>🌸 Rose Garden</li>
        </ul>

        <h2>Best Time to Visit</h2>
        <p>October to June</p>

        <h2>Starting Package</h2>
        <p>₹1,999 / Person</p>

        <Link to="/bookings"><button className="book-btn">Book Now</button></Link>
      </div>

    </section>
  );
};

export default Ooty