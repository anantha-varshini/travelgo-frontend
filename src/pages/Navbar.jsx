import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1 className='logo'>TRAVEL GO</h1>
            <ul className='nav-links'>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/destinations'><li>Destinations</li></Link>
                <Link to='/bookings'><li>Booking</li></Link>
                <Link to='/hotels'><li>Hotels</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar