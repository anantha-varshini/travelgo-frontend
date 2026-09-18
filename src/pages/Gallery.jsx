import React from "react";
import "./Pages.css";
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'
import gallery7 from '../assets/gallery7.jpg'
import gallery8 from '../assets/gallery8.jpg'
import gallery9 from '../assets/gallery9.jpg'

const galleryImages = [
  {
    id: 1,
    image: gallery1,
    place: "Ooty",
    name: "Priya S.",
  },
  {
    id: 2,
    image: gallery2,
    place: "China",
    name: "Rahul K.",
  },
  {
    id: 3,
    image: gallery3,
    place: "India",
    name: "Ananya M.",
  },
  {
    id: 4,
    image: gallery4,
    place: "Japan",
    name: "Arjun R.",
  },
  {
    id: 5,
    image: gallery5,
    place: "Vietnam",
    name: "Sneha P.",
  },
  {
    id: 6,
    image: gallery6,
    place: "South Korea",
    name: "Meera T.",
  },
  {
    id: 7,
    image: gallery7,
    place: "Yercaud",
    name: "Hari V.",
  },
  {
    id: 8,
    image: gallery8,
    place: "Valparai",
    name: "Keerthi N.",
  },
  {
    id: 9,
    image: gallery9,
    place: "Yelagiri",
    name: "Deepak R.",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-page">

      <div className="gallery-header">
        <h1>Travel Memories</h1>
        <p>
          Moments captured by our happy travelers from around the world.
        </p>
      </div>

      <div className="travel-gallery">
        {galleryImages.map((item) => (
          <div className="gallery-card" key={item.id}>

            <img src={item.image} alt={item.place} />

            <div className="overlay">
              <h3>📍 {item.place}</h3>
              <p>👤 {item.name}</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>

          </div>
        ))}
      </div>

      <div className="gallery-stats">

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Happy Travelers</p>
        </div>

        <div className="stat-box">
          <h2>2500+</h2>
          <p>Photos Shared</p>
        </div>

        <div className="stat-box">
          <h2>120+</h2>
          <p>Destinations</p>
        </div>

      </div>

      <div className="gallery-quote">
        <h2>"Every picture tells a beautiful travel story."</h2>
        <p>Thank you to our wonderful travelers for sharing their unforgettable memories with Travel-Go.</p>
      </div>

    </section>
  );
};

export default Gallery;