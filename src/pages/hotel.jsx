import tajhotel from '../assets/tajhotel.jpg'
import hillsideresidency from '../assets/hillsideresidency.jpg'
import lakepalace from '../assets/lakepalace.jpg'
import royalinn from '../assets/royalinn.jpg'
import Kodaikanal from './Kodaikanal';

const hotel = [
  {
    id: 1,
    name: "The Taj Resort",
    destination: "Goa",
    image: tajhotel,
    room:"3",
    rating: "4.8",
    price: 4500,
    description: "Luxury beachside resort with swimming pool and free breakfast."
  },

  {
    id: 2,
    name: "Hill View Residency",
    destination: "Ooty",
    image: hillsideresidency,
    room:"4",
    rating: "4.5",
    price: 2800,
    description: "Beautiful mountain view rooms with complimentary breakfast."
  },

  {
    id: 3,
    name: "Lake Palace",
    destination: "Kodaikanal",
    image: lakepalace,
    room:"6",
    rating: "4.7",
    price: 3900,
    description: "Peaceful stay surrounded by tea plantations."
  },

  {
    id: 4,
    name: "Royal Inn",
    destination: "Kodaikanal",
    image: royalinn,
    room:"14",
    rating: "4.4",
    price: 3200,
    description: "Comfortable rooms with garden and lake views."
  }
];

export default hotel;