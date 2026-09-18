import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'
import aboutimage from '../assets/aboutimage.jpg'
import why1 from '../assets/why1.jpg'
import why2 from '../assets/why2.jpg'
import why3 from '../assets/why3.jpg'
import why4 from '../assets/why4.jpg'
import delhi from '../assets/delhi.jpg'
import offer1 from '../assets/offer1.jpg'
import offer2 from '../assets/offer2.jpg'
import offer3 from '../assets/offer3.jpg'
import china from '../assets/china.jpg'
import japan from '../assets/japan.jpg'
import dubai from '../assets/dubai.jpg'
import southkorea from '../assets/southkorea.jpg'
import vietnam from '../assets/vietnam.jpg'

const Home = () => {
  return (
    <div>
        <section className='Home'>
            <div className='home-content'>
                <h1>Explore the World with Travel Go</h1>
                <p>Experience stunning landscapes, vibrant cultures, and exciting adventures across the globe.</p>
                <Link to="/destinations"><button className='btn'>Explore Now</button></Link>
            </div>
        </section>
        <section className='Home-about'>
          <div className='about-container'>
          <div className='about-content'>
            <h1>About Travel Go</h1>
            <h2>Discover the World with Travel Go</h2>
            <p>At Travel Go, we believe that every journey should be exciting, seamless, and unforgettable. Whether you're planning a relaxing beach vacation, a family getaway, a business trip, or an adventurous expedition, we're here to make your travel experience simple and stress-free.
              Our platform helps travelers explore destinations, compare travel options, and book trips with confidence. We are committed to providing reliable services, affordable prices, and a user-friendly booking experience that saves you time and effort.
              With a passion for travel and customer satisfaction, Travel Go connects you to amazing destinations across the globe. From finding the perfect itinerary to ensuring a smooth booking process, we strive to be your trusted travel partner every step of the way.</p>
            <Link to="/about"><button className='book-btn'>Learn More</button></Link>  
          </div>
          <div className='about-image'>
            <img src={aboutimage}/>
          </div>
          </div>
        </section>
        <section className='about-us'>
          <h1>✈️ Why Choose Travel Go?</h1>
          <div className='aboutus-container'>
            <div className='aboutus-card'>
              <img src={why1}/>
              <h2>🌍 Best Destinations</h2>
              <p>Carefully selected places around the world.</p>
            </div>
            <div className='aboutus-card'>
              <img src={why2}/>
              <h2>💰 Affordable Prices</h2>
              <p>Great deals without compromising quality.</p>
            </div>
            <div className='aboutus-card'>
              <img src={why3}/>
              <h2>📞 24/7 Support</h2>
              <p>We're here whenever you need assistance.</p>
            </div>
            <div className='aboutus-card'>
              <img src={why4}/>
              <h2>⭐ Trusted Reviews</h2>
              <p>Thousands of happy travelers.</p>
            </div>
          </div>
        </section>
        <section className='Top-destinations'>
          <h1>Top Destinations</h1>
          <div className='tdestinations'>
            <div className='tdestination-card'>
              <img src={delhi}/>
              <h3>India</h3>
              <p>Where every street tells a story of history, hustle, and heart.</p>
              <Link to="/india"><button>Book Now</button></Link>
            </div>
            <div className='tdestination-card'>
              <img src={china}/>
              <h3>China</h3>
              <p>Where ancient traditions meet modern innovation.</p>
              <Link to="/china"><button>Book Now</button></Link>
            </div>
            <div className='tdestination-card'>
              <img src={dubai}/>
              <h3>Dubai</h3>
              <p>Where dreams rise as high as the skyline</p>
              <Link to="/dubai"><button>Book Now</button></Link>
            </div>
            <div className='tdestination-card'>
              <img src={japan}/>
              <h3>Japan</h3>
              <p>Where timeless tradition meets cutting-edge innovation.</p>
              <Link to="/japan"><button>Book Now</button></Link>
            </div>
            <div className='tdestination-card'>
              <img src={southkorea}/>
              <h3>South Korea</h3>
              <p>Where rich traditions blend seamlessly with modern innovation.</p>
              <Link to="/southkorea"><button>Book Now</button></Link>
            </div>
            <div className='tdestination-card'>
              <img src={vietnam}/>
              <h3>Vietnam</h3>
              <p>Where timeless traditions, breathtaking landscapes, and vibrant culture come alive</p>
              <Link to="/vietnam"><button>Book Now</button></Link>
            </div>
          </div>
        </section>
        
        <section className='Offers'>
          <div className="offer">
                <h2>Get Offers</h2>
          
                <div className="offer-container">
          
                  <div className="offer-card">
                    <img src={offer1}/>
                    <h3>50% OFF</h3>
                    <p>On your first booking.</p>
                    <Link to="/bookings"><button>Book Now</button></Link>
                  </div>
          
                  <div className="offer-card">
                    <img src={offer2}/>
                    <h3>Family Package</h3>
                    <p>Get ₹999 off for per head</p>
                    <Link to="/bookings"><button>Book Now</button></Link>
                  </div>
          
                  <div className="offer-card">
                    <img src={offer3}/>
                    <h3>Premium package</h3>
                    <p>Book Your Premium Travel with 20% off</p>
                    <Link to="/bookings"><button>Book Now</button></Link>
                  </div>
          
                </div>
              </div>
        </section>
    </div>
  )
}

export default Home