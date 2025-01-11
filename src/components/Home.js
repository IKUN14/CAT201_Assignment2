import React from 'react';
import { Link } from 'react-router-dom';
import PenangScenery from '../images/penang-scenery.jpg';
import FoodParadise from '../images/nasi-lemak.png';
import UniqueStays from '../images/mansion.jpg';
import homebg from '../images/home.avif';

const highlights = [
  {
    id: 1,
    title: "Attractions",
    description: "Explore the UNESCO World Heritage sites in George Town, Penang",
    image: PenangScenery,
    link: "/tourist-spots"
  },
  {
    id: 2,
    title: "Food",
    description: "Savor unique Nyonya cuisine and street food in Penang",
    image: FoodParadise,
    link: "/food"
  },
  {
    id: 3,
    title: "Hotels",
    description: "Experience a variety of stays from heritage hotels to modern resorts",
    image: UniqueStays,
    link: "/hotels"
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <div 
        className="page-background" 
        style={{
          backgroundImage: `url(${homebg})`,
        }}
      />
      <section className="hero" style={{
        backgroundImage: "url('/images/penang-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#2c3e50",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
      }}>
        <h1>Welcome to Penang</h1>
        <p>Explore Malaysia's most fascinating cultural capital</p>
      </section>

      <section className="highlights">
        <h2 className="section-title">Featured Highlights</h2>
        <div className="grid">
          {highlights.map(item => (
            <Link to={item.link} key={item.id} className="highlight-card card">
              <img
                src={item.image}
                alt={item.title}
                className="card-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Penang+Scenery';
                }}
              />
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="quick-info">
        <div className="info-grid">
          <div className="info-item">
            <h3>Best Travel Season</h3>
            <p>November to January is the best time to visit Penang</p>
          </div>
          <div className="info-item">
            <h3>Transportation</h3>
            <p>Choose from taxis, buses, or walking to explore the city</p>
          </div>
          <div className="info-item">
            <h3>Local Currency</h3>
            <p>Malaysian Ringgit (MYR)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
