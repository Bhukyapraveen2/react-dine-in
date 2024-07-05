import React from 'react';
import './index.css'; // Ensure Home.css is in the same directory as Home.js
import SearchBar from '/components/SearchBar'; // Path to SearchBar.js
import FeaturedRestaurants from '/components/FeaturedRestaurants'; // Path to FeaturedRestaurants.js

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="background-overlay">
          <h1>Top Dine-In Restaurants in Hyderabad</h1>
          <SearchBar />
        </div>
      </header>
      <FeaturedRestaurants />
    </div>
  );
};

export default Home;
