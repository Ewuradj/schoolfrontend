import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import allSchools from '../allSchools.json';

const SchoolSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // Filter schools based on search query
    const filteredSchools = Object.values(allSchools[0]).flatMap(region =>
      region.filter(school =>
        school.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setSearchResults(filteredSchools);
  };

  const goToSearchPage = () => {
    navigate('/searchresults'); // Navigate to the search page
  };

  return (
    <div className="mt-8 mx-auto max-w-xl">
      <label htmlFor="search" className="block font-semibold mb-2 text-gray-700">Search Schools by Name or Region:</label>
      <input id="search" type="text" value={searchQuery} onChange={handleSearch} className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Search..." />
      <button onClick={goToSearchPage} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Search</button>
    </div>
  );
};

export default SchoolSearch;
