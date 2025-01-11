import React from 'react';
import BackButton from './BackButton';
import laksa from '../images/laksa.png';
import kueyTeow from '../images/char-kuey-teow.png';
import nyonya from '../images/nyonya.png';
import foodbg from '../images/food.jpg';

const foodItems = [
  {
    id: 1,
    name: "Penang Laksa",
    description: "Rich coconut-based soup with prawns, fish balls, and rice noodles, one of Penang's most famous dishes.",
    image: laksa,
    price: "RM 8-12",
    rating: 4.8
  },
  {
    id: 2,
    name: "Char Kuey Teow",
    description: "Fresh flat rice noodles stir-fried with prawns, bean sprouts, and chives, a fragrant street food favorite.",
    image: kueyTeow,
    price: "RM 7-10",
    rating: 4.7
  },
  {
    id: 3,
    name: "Nyonya Kuih",
    description: "Traditional colorful pastries combining Malay and Chinese influences, with delicate textures and flavors.",
    image: nyonya,
    price: "RM 1-3/piece",
    rating: 4.5
  }
];

const Food = () => {
  return (
    <div className="food-page">
      <div 
        className="page-background" 
        style={{
          backgroundImage: `url(${foodbg})`,
        }}
      />
      <header className="page-header">
        <h1>Cuisine</h1>
        <p className="subtitle">Discover the unique food culture of Penang</p>
      </header>

      <div className="grid">
        {foodItems.map(item => (
          <div key={item.id} className="card">
            <img 
              src={item.image} 
              alt={item.name}
              className="card-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Food+Image';
              }}
            />
            <div className="card-content">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-text">{item.description}</p>
              <div className="card-footer">
                <span className="price">{item.price}</span>
                <span className="rating">★ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <BackButton />
    </div>
  );
};

export default Food;
