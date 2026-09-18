import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooking, updateRooms, removeBooking,clearBookings, calculateTotal } from "./hotelSlice";

const Hotelpage = () => {
  const dispatch=useDispatch();
  const bookedHotels = useSelector(
    (state) => state.hotelBooking.bookedHotels);

const handleConfirmBooking = () => {
  alert("🎉 Room Booked Successfully!");
  dispatch(clearBookings()); 
};

  return (
    <div className="hotel-booking-wrapper">
    <h1 className="hotel-booking-title">My Hotel Bookings</h1>

    {bookedHotels.length === 0 ? (
    <p className="hotel-empty-msg">No hotels booked yet.</p>) : (
    bookedHotels.map((hotel) => (
      <div className="hotel-booking-card" key={hotel.id}>
        <img className="hotel-booking-image"src={hotel.image}alt={hotel.name}/>

        <div className="hotel-booking-info">

          <h2>{hotel.name}</h2>
          <p>📍{hotel.destination}</p>
          <p>₹{hotel.price} / Night</p>

          <div className="hotel-room-counter">

            <button className="hotel-room-btn"onClick={() => dispatch(updateRooms({id: hotel.id, change: -1, }))}>-</button>
            <span className="hotel-room-count">{hotel.rooms}</span>
            <button className="hotel-room-btn" onClick={() => dispatch(updateRooms({id: hotel.id,change: 1,}))}>+</button>

          </div>

          <h3 className="hotel-total-price">Total : ₹{hotel.price * hotel.rooms}</h3>
          <button className="hotel-remove-booking"onClick={() => dispatch(removeBooking(hotel.id))}> Remove Booking</button>

          {bookedHotels.length > 0 && (
            <div className="hotel-confirm-section">
              <button className="hotel-confirm-btn" onClick={handleConfirmBooking}>Confirm Booking</button>
              </div>
            )}
        </div>
      </div>
    ))
  )}
</div>
  );
};

export default Hotelpage;