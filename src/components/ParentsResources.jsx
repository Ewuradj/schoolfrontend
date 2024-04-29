import React from 'react';

const ParentResources = () => {
  // Example array of parent resources
  const resources = [
    {
      title: 'Choosing the Right School',
      description: 'A guide to help parents choose the best school for their child.',
      link: 'https://www.example.com/choosing-school-guide',
    },
    {
      title: 'Preparing for School Admissions',
      description: 'Tips and advice on preparing your child for school admissions.',
      link: 'https://www.example.com/school-admissions-tips',
    },
    {
      title: 'Understanding the Education System',
      description: 'An overview of the education system and its components.',
      link: 'https://www.example.com/education-system-overview',
    },
    // Add more resources as needed
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-10">PARENTS' RESOURCES: <span className='text-lg'>helpful guides for choosing the right school</span></h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href='https://medium.com/@sakansha1874/tips-for-preparing-your-child-for-a-successful-school-admission-interview-96da1f180ad0'
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentResources;