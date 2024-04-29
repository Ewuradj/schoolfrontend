import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import schoolsData from '../schoolData.json';
import { Link } from 'react-router-dom';

const Section = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3; // Number of items per page

  const pageCount = Math.ceil(schoolsData[0].schools.length / pageSize);

  const handleNextPage = () => {
    setPageIndex((prevIndex) => Math.min(prevIndex + 1, pageCount - 1));
  };

  const handlePrevPage = () => {
    setPageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div> 
      <h1 className="text-center text-3xl mb-1 mt-10 font-extrabold">FEATURED SCHOOLS</h1>
      <div className='flex absolute right-0 mr-28 mt-10'>
      <button className="ml-40 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/schools">View More Schools</Link>
        </button>
      </div>
    <section className="text-gray-600 body-font bg-white overflow-hidden mt-1 shadow-lg bg-light-blue-200">
      <div class="box">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex justify-center">
          <AnimatePresence initial={false}>
            {schoolsData[0].schools
              .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
              .map((school, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-4 md:w-1/3"
                >
                  {/* Card content */}
                  <div className="h-full border-2 mt-1 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={school.image}
                      alt="School"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg text-red-900 dark:text-blue-300 font-semibold">
                          {school.title}
                        </h2>
                      </div>
                      <div className="flex items-center space-x-4 mt-4 text-yellow-600 dark:text-yellow-300">
                        {/* Star rating component */}
                        {/* <StarRating rating={school.rating} /> */}
                        {/* <p>{school.numStudents} Students</p>
                        <p>{school.type}</p>
                        <p>{school.level}</p> */}
                      </div>
                      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200">
                        {school.name}
                      </h1>
                      {/* <p className="text-zinc-600 dark:text-zinc-300">
                        {school.description}
                      </p> */}
                      <p className="mt-2 text-zinc-700 dark:text-zinc-400">
                        {/* <Link
                          to="/reviews"
                          className="text-blue-800 dark:text-blue-300 hover:underline dark:hover:underline"
                        >
                          Read Reviews
                        </Link> */}
                      </p>
                      <div className="flex items-center space-x-4 mt-4 text-zinc-600 dark:text-zinc-300">
                        {/* <div className="flex items-center">
                          <FaMapMarkerAlt
                            style={{ transform: 'rotate(45deg)' }}
                            className="mr-1"
                          />
                          <p>{school.location}</p>
                        </div> */}
                      </div>
                      <div className="flex items-center">
                        <a
                          href={school.website}
                          className="text-blue-600 dark:blue-300 hover:underline dark:hover:underline mt-4 mr-24 inline-block"
                        >
                          View website
                        </a>
                        <Link
                          to={`/schooldetailpage/${school.ID}`}
                          className="text-blue-600 inline-flex underline items-center md:mb-2 lg:mb-0 mt-4"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={pageIndex === 0}
            className="mr-2 px-4 py-2 bg-black text-white rounded-md disabled:bg-gray-300"
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={pageIndex === pageCount - 1}
            className="px-4 py-2 bg-black text-white rounded-md disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
      </div>
    </section>
    </div>
  );
};

export default Section;
