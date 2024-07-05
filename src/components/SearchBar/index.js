import React, { useState } from 'react';
import './index.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Add search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
