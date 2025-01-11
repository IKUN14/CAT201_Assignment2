import React from 'react';
import BackButton from './BackButton';
import G from '../images/g.jpg';
import mansion from '../images/mansion.jpg';
import noordin from '../images/noordin.jpg';
import hotelsbg from '../images/hot.jpg';

const hotels = [
  {
    id: 1,
    name: "G Hotel Kelawai",
    description: "Luxury seafront hotel offering top-notch services and facilities.",
    image: G,
    price: "From RM 500/night",
    rating: 4.9,
    amenities: ["Swimming Pool", "Spa", "Fitness Center"]
  },
  {
    id: 2,
    name: "Noordin Mews",
    description: "Boutique cultural hotel located in the historic district of George Town, exuding vintage charm.",
    image: noordin,
    price: "From RM 200/night",
    rating: 4.7,
    amenities: ["Free WiFi", "Cultural Tours"]
  },
  {
    id: 3,
    name: "Cheong Fatt Tze",
    description: "The famous Blue Mansion, a boutique hotel blending Eastern and Western architectural styles.",
    image: mansion,
    price: "From RM 400/night",
    rating: 4.8,
    amenities: ["Historic Building", "Garden View"]
  }
];

const Hotels = () => {
  return (
    <div className="hotels-page">
      <div 
        className="page-background" 
        style={{
          backgroundImage: `url(${hotelsbg})`,
        }}
      />
      <header className="page-header">
        <h1>Accommodations</h1>
        <p className="subtitle">Find the perfect place to stay for your trip to Penang</p>
      </header>

      <div className="grid">
        {hotels.map(hotel => (
          <div key={hotel.id} className="card hotel-card">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="card-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Hotel+Image';
              }}
            />
            <div className="card-content">
              <h2 className="card-title">{hotel.name}</h2>
              <p className="card-text">{hotel.description}</p>
              <div className="amenities">
                <h3>Amenities</h3>
                <ul className="amenities-list">
                  {hotel.amenities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <span className="price">{hotel.price}</span>
                <span className="rating">★ {hotel.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BackButton />
    </div>
  );
};

export default Hotels;
