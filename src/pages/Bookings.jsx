import React from 'react'
import './Pages.css'

const Bookings = () => {

  const handleConfirmBooking = async (event) => {
    event.preventDefault()

    const form = event.target

    const booking = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      destination: form.destination.value,
      date: form.date.value,
      travellers: form.travellers.value,
      requests: form.requests.value
    }

    try {
      const res = await fetch('https://travelgo-backend-1.onrender.com/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      })

      const data = await res.json()

      if (res.ok) {
        alert("🎊 Booking Confirmed")
        form.reset()
      } else {
        alert(data.message || "Booking failed")
      }

    } catch (error) {
      console.error("Booking error:", error)
      alert("Failed to save booking")
    }
  }

  return (
    <section className='booking'>
      <h1>Book Your Trip</h1>
      <p>Fill in your details to reserve your dream destination.</p>

      <form className='booking-form' onSubmit={handleConfirmBooking}>
        
        <input type="text"name="name"placeholder="Full name"  required/>
        <input type="email" name="email" placeholder="Email address" required/>
        <input type="tel"name="phone" placeholder="Phone Number" required/>

        <select name="destination" required>
          <option value="">Select Destination</option>
          <option value="Ooty">Ooty</option>
          <option value="Kodaikanal">Kodaikanal</option>
          <option value="Yercaud">Yercaud</option>
          <option value="Yelagiri">Yelagiri</option>
          <option value="Valparai">Valparai</option>
          <option value="Kotagiri">Kotagiri</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Dubai">Dubai</option>
          <option value="Japan">Japan</option>
          <option value="South Korea">South Korea</option>
          <option value="Vietnam">Vietnam</option>
        </select>

        <input type="date" name="date" required/>
        <input type="number"name="travellers" placeholder="Number of Travellers" min="1"required/>
        <textarea name="requests" rows="5" placeholder="Special Requests"></textarea>

        <button type="submit">Book Now</button>
        </form>
    </section>
  )
}

export default Bookings