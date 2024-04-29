// SearchResults.js
import React from 'react';

const SearchResults = ({ searchQuery, searchResults }) => {
  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      {searchResults.map((school) => (
        <div key={school.ID}>
          {/* Render school details here */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
