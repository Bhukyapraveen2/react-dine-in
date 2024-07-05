import React from 'react';
import './index.css';

const featuredRestaurants = [
  {
    name: 'Restaurant 1',
    description: 'A great place for Italian cuisine.',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Restaurant 2',
    description: 'Best seafood in town.',
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Restaurant 3',
    description: 'Famous for its desserts.',
    imageUrl:
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const FeaturedRestaurants = () => {
  return (
    <div className="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="restaurants-list">
        {featuredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
