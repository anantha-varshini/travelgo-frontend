import React from 'react'
import './Pages.css'
import hotel from './hotel'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBooking, updateRooms, clearBookings, calculateTotal } from '../new/hotelSlice'


const Hotels = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
  return (
    <div className="hotels">
      <h1>Hotels</h1>
      <p>Find the best hotels in your favorite destinations.</p>

      <div className="hotel-container">
        {hotel.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-content">
              <h2>{hotel.name}</h2>
              <h4>📍{hotel.destination}</h4>
              <p className="rating">⭐{hotel.rating}</p>
              <p>{hotel.description}</p>
              <h3>₹{hotel.price} / Night</h3>
              <p>Rooms Available:{hotel.room}</p>
              <button onClick={()=>{dispatch(addBooking(hotel));navigate("/hotelpage");}}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels