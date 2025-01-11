import React from 'react';
import BackButton from './BackButton';
import ClanJetties from '../images/penang-scenery.jpg';
import KekLokSi from '../images/kek-lok-si.jpg';
import StreetArt from '../images/street-art.jpg';
import spotsbg from '../images/scene.jpg';

const spots = [
  {
    id: 1,
    name: "Clan Jetties",
    description: "A historic water village showcasing the lifestyle of early Chinese immigrants.",
    image: ClanJetties,
    price: "Free",
    rating: 4.6,
    openHours: "Open all day"
  },
  {
    id: 2,
    name: "Kek Lok Si Temple",
    description: "One of Southeast Asia's largest Buddhist temples.",
    image: KekLokSi,
    price: "RM 2",
    rating: 4.8,
    openHours: "9:00 AM - 5:30 PM"
  },
  {
    id: 3,
    name: "Penang Street Art",
    description: "Famous murals reflecting Penang's cultural heritage and artistic charm.",
    image: StreetArt,
    price: "Free",
    rating: 4.7,
    openHours: "Accessible all day"
  }
];

const TouristSpots = () => {
  return (
    <div className="spots-page">
      <div 
        className="page-background" 
        style={{
          backgroundImage: `url(${spotsbg})`,
        }}
      />
      <header className="page-header">
        <h1>Tourist Spots</h1>
        <p className="subtitle">Discover the unique charm of this UNESCO World Heritage city</p>
      </header>

      <div className="grid">
        {spots.map(spot => (
          <div key={spot.id} className="card">
            <img
              src={spot.image}
              alt={spot.name}
              className="card-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Spot+Image';
              }}
            />
            <div className="card-content">
              <h2 className="card-title">{spot.name}</h2>
              <p className="card-text">{spot.description}</p>
              <div className="spot-details">
                <p><strong>Opening Hours:</strong> {spot.openHours}</p>
                <p><strong>Entrance Fee:</strong> {spot.price}</p>
              </div>
              <div className="card-footer">
                <span className="rating">★ {spot.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BackButton />
    </div>
  );
};

export default TouristSpots;
