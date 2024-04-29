import React from 'react';

const SchoolComparison = () => {
  // Example data for schools
  const schools = [
    {
        "name": "Accra Academy",
        "number_of_students": 1200,
        "type": "Public",
        "tuition_fees": "from GH₵ 1000",
        "location": "Bubuashie, Accra",
    },
    {
        "name": "Christ the King International School",
        "level": "Primary",
        "number_of_students": 400,
        "type": "Private",
        "tuition_fees": "GHC 2,500 per term",
        "location": "Accra",
    },
    {
        "level": "Primary",
        "number_of_students": 250,
        "type": "Private",
        "tuition_fees": "GHC 2,800 per term",
        "location": "Kumasi",
    },
    {
        "name": "Adisadel Preparatory School",
        "level": "Primary",
        "number_of_students": 300,
        "type": "Private",
        "tuition_fees": "GHC 2,500 per term",
        "location": "Cape Coast",
    },
    {
        "name": "University Practice Primary School",
        "level": "Primary",
        "number_of_students": 250,
        "type": "Public",
        "tuition_fees": "Free (Government-funded)",
        "location": "Cape Coast",
    },
    {
        "name": "Mangoase Preparatory School",
        "level": "Primary",
        "number_of_students": 200,
        "type": "Private",
        "tuition_fees": "GHC 2,300 per term",
        "location": "Koforidua",
    },
    {
        "name": "Adukrom Methodist Primary School",
        "level": "Primary",
        "number_of_students": 150,
        "type": "Public",
        "tuition_fees": "Free (Government-funded)",
        "location": "Adukrom",
    },
    {
       
        "name": "Tamale Experimental Primary School",
        "level": "Primary",
        "number_of_students": 300,
        "type": "Public",
        "tuition_fees": "Free (Government-funded)",
        "location": "Tamale",
    },
    // Add more schools as needed
  ];

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">School Comparison</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {schools.map((school, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold mb-2">{school.name}</h3>
              <h3 className=" text-gray-800font-semibold mb-2">Level:{school.level}</h3>
              <h3 className=" text-gray-800font-semibold mb-2"> Type: {school.type}</h3>
              <p className="text-gray-800 mb-2">Tuition: {school.tuition_fees}</p>
              <p className="text-gray-800">Student Count: {school.number_of_students}</p>
              <p className="text-gray-600 mb-2">{school.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolComparison;