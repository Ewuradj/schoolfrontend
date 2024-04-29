import React, { useState } from 'react';
import allSchools from './allSchools.json';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/navbar';


function convertToStars(rating) {
  const numStars = Math.round(parseFloat(rating));
  const decimalPart = parseFloat(rating) - numStars;
  let stars = '⭐'.repeat(numStars);
  
  // Add half star if decimal part is greater than or equal to 0.5
  if (decimalPart >= 0.5) {
      stars += '½';
  }
  
  

 // Add empty stars to make it out of 5
 const remainingStars = 5 - Math.ceil(rating); // Calculate remaining stars needed
 stars += '☆'.repeat(remainingStars); // Add empty stars
 
 return stars;
}

const SchoolList = () => {

  const [regionFilter, setRegionFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const regions = Object.keys(allSchools[0]); // Accessing the regions from the first (and only) element of the array

 

  const filteredSchools = allSchools[0][regionFilter] ? allSchools[0][regionFilter] : [].concat(...Object.values(allSchools[0]))
    .filter(school => school.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter(school => school.type.toLowerCase().includes(typeFilter.toLowerCase()));

  const handleRegionFilterChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };


  return (
    <div>
      <Navbar />
      <div className=" flex ml-10 mb-24 m-5 5">
        <label htmlFor="regionFilter" className="block font-semibold ml-20  mb-1">Filter by Region:</label>
        <select id="regionFilter" value={regionFilter} onChange={handleRegionFilterChange} className="border  rounded-md p-2 mr-2">
          <option value="">All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <label htmlFor="nameFilter" className="block ml-10 font-semibold mb-1">Filter by Name:</label>
        <input id="nameFilter" type="text" value={nameFilter} onChange={handleNameFilterChange} className="border rounded-md p-2 mr-2" />
        <label htmlFor="typeFilter" className="block ml-10 font-semibold mb-1">Filter by Type:</label>
        <input id="typeFilter" type="text" value={typeFilter} onChange={handleTypeFilterChange} className="border rounded-md p-2" />
      </div>
      <h4 className="text-center text-4xl m-16 5 font-bold">{regionFilter}</h4>




      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 pl-5 shadow-lg bg-light-blue-200 gap-10">
        {filteredSchools.map((school) => (
          <div key={school.ID} className="p-4 bg-white rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
             <Link to={`/schooldetailpage/${school.ID}`}>
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={school.image}
              alt="School"
              
            />
            </Link>
            <Link to={`/schooldetailpage/${school.ID}`}>
              <h3 className='text-lg pt-1 font-bold'>{school.name}</h3>
            </Link>
            <p>Number of Students: {school.number_of_students}</p>
            <p>Type: {school.type}</p>
            <p>Tuition Fees: {school.tuition_fees}</p>
            <p>Location: {school.location}</p>
            <p>Contact: {school.contact}</p>
            <p>Reviews: {convertToStars(school.reviews)}</p>
            {/* You can add more details here */}
           
          </div>
        ))}
      </div>




    </div>
  );
};

export default SchoolList;
