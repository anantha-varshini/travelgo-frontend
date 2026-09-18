import react from 'react'
import './Pages.css'
import ooty from "../assets/ooty.jpg"
import kodaikanal from "../assets/kodaikanal.jpg"
import yercaud from "../assets/yercaud.jpg"
import yelagiri from "../assets/yelagiri.jpg"
import valparai from "../assets/valparai.jpg"
import kotagiri from "../assets/kotagiri.jpg"
import {Link} from 'react-router-dom'

const destinations = [
  {
    id: 1,
    image: ooty,
    name: "Ooty",
    quote: "The Queen of Hill Stations with misty mountains and tea gardens.",
    link:"/ooty"
  },
  {
    id: 2,
    image: kodaikanal,
    name: "Kodaikanal",
    quote: "Experience serene lakes, cool weather, and breathtaking valleys.",
    link:"/kodaikanal"
  },
  {
    id: 3,
    image: yercaud,
    name: "Yercaud",
    quote: "A peaceful retreat surrounded by coffee plantations and lush greenery.",
    link:"/yercaud"
  },
  {
    id: 4,
    image: yelagiri,
    name: "Yelagiri",
    quote: "A hidden gem perfect for trekking and nature lovers.",
    link:"/yelagiri"
  },
  {
    id: 5,
    image: valparai,
    name: "Valparai",
    quote: "Discover endless tea estates, wildlife, and winding mountain roads.",
    link:"/valparai"
  },
  {
    id: 6,
    image: kotagiri,
    name: "Kotagiri",
    quote: "Enjoy tranquil landscapes and refreshing mountain breezes.",
    link:"/kotagiri"
  }
];

function Destinations() {
  return (
    <div className="destinations">
  <h1>Popular Destinations</h1>
  <div className="card-container">
  {destinations.map((place) => (
      <div className="card" key={place.id}>
        <Link to={place.link}>
        <img src={place.image} alt={place.name} />
        </Link>
        <h3>{place.name}</h3>
        <p>{place.quote}</p>
      </div>
    
  ))}
  </div>
</div>
  );
}

export default Destinations;