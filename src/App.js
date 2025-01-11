import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import TouristSpots from './components/TouristSpots';
import Food from './components/Food';
import Hotels from './components/Hotels';
import './styles.css';

const App = () => (
  <Router>
    <div className="app-container">
      <nav className="main-nav">
        <div className="nav-logo">
          <h1>Penang Travel</h1>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/tourist-spots">Spots</NavLink></li>
          <li><NavLink to="/food">Food</NavLink></li>
          <li><NavLink to="/hotels">Hotels</NavLink></li>
        </ul>
      </nav>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tourist-spots" element={<TouristSpots />} />
          <Route path="/food" element={<Food />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </main>

      <footer className="main-footer">
        <p>© 2025 Travel Guide Copyright</p>
      </footer>
    </div>
  </Router>
);

export default App;
