import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import schoolsData from "../../components/schoolData.json"

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

const SchoolDetailPage = () => {
  const params=useParams();
  const schoolId=params.schoolId

  const school = schoolsData[0].schools.find(school => school.ID === schoolId);
  
  // const ratings = (rating) => {
  //   for(let ratings of rating ){
  //     console.log('yyede', ratings)
  //     return rating
  //   }
  // }
  
  // ratings(school.ratings)

  return (
    <div>
    <Navbar/>
   

    <div className="container bg-white-50 mx-auto pt-8">
       <div className="flex justify-between gap-1">
  <a
    href="/section"
    className="inline-flex items-center border border-black px-3 py-1.5 rounded-md text-black-500 mt-2 ml-5 hover:bg-indigo-50 mb-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      ></path>
    </svg>
    <span className="ml-1 font-bold text-lg">Back</span>
  </a>
  <a
    href="/schools"
    className="inline-flex items-center mr-5 border border-black px-3 py-1.5 rounded-md text-white-500 mb-4 mt-2 hover:bg-indigo-50"
  >
    <span className="mr-1 font-bold text-lg">Next</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
  </a>
</div> 
    <motion.div
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 4 }}
         transition={{ duration: 1 }}
       > 
  <div className="flex flex-wrap">
    <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">{school.name}</h1><br/>
      <img src={school.image} alt="School" className="w-200 h-auto mb-4 rounded-lg shadow-lg " />
      <p className="text-zinc-600 mb-4">
       {school.description}
      </p>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm bg-blue-200 text-blue-800 py-1 px-3 rounded-full m-4">
          {school.level}
        </div>
        {/* <div className="text-sm bg-green-200 text-green-800 py-1 px-3 rounded-full">
          POST 16
        </div> */}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="text-center ">
        <img src='https://www.schoolguide.co.uk/assets/infograph/schools_page/bust-140adf50ac005fcc19ad68584c6400424951e0f09fe8be226ef3d93fb4d3a713.png' alt="School" className="w-200 h-auto bg-yellow-400 flex flex-col items-center" />
         
          <div className="mt-2 flex "> PUPILS: {school.numStudents}</div>
        </div>
       
        <div className="text-center">
          <img src="https://www.schoolguide.co.uk/assets/infograph/schools_page/cake-2af1f98af43ae32c02fc48446145ed7c07a553810cbcf5d0a2f9d9cbdc0b97e7.png" alt="Ages" className='bg-yellow-400' />

          <div className="mt-2 flex">AGES: 14-19</div>
        </div>
        <div className="text-center">
          <img src="https://www.schoolguide.co.uk/assets/infograph/schools_page/gender-f72b4fe7642c03683d001744d4e40f5120eeb2620a903323495ccd9ae05670ce.png" alt="Gender" className='bg-yellow-400' />
          <div className="mt-2 flex">GENDER: Mixed</div>
        </div>
        <div className="text-center">
          <img src="https://www.schoolguide.co.uk/assets/infograph/schools_page/building-65364feb075e0aea39e0183d0aae4d663e6146bd603b40cf127a579a0867f753.png" alt="Type" className='bg-yellow-400'/>
          <div className="mt-2 flex">{school.type}</div>
        </div>
     
      </div>
      <div className="mb-6">
        {/* <h2 className="text-xl font-semibold mb-2">
          How Does The School Perform?
        </h2> */}
        {/* <div className="flex justify-around">
          <div>
            <img src="https://placehold.co/100" alt="Performance" />
            <div>Inadequate</div>
          </div>
          <div>
            <img src="https://placehold.co/100" alt="Performance" />
            <div>95% NATIONAL AVG. 38%</div>
          </div>
          <div>
            <img src="https://placehold.co/100" alt="Performance" />
            <div>100% NATIONAL AVG. 45%</div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="w-full h-11 lg:w-1/4 pl-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sticky top-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">SCHOOL GUIDE RATING</h3>
         
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg> */}

          
        </div>
        <div className="flex items-center mb-4">
        <img src="https://www.schoolguide.co.uk/assets/logo_rating-c3dd90ae3941e9bc32e65f84a3bd8bf4fde1ac9ec83c6ced59a7fb83ab679ba9.jpg" alt="rating" className="max-w-full h-auto" />
        {convertToStars(school.ratings)}
        </div>
        <Link to='/comparison'>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4">
          Compare To Nearby Schools
        </button>
        </Link>
        <div className="text-sm">
          <div className="mb-2">
            Location: {school.location}
          </div>
          {/* <div className="mb-2">
            <img src="https://placehold.co/20" alt="Phone" />{school.contact}

          </div> */}
          {/* <div>
          <Link to='/ {school.website}'><h2 className="text-lg ">{school.website} </h2></Link>
          </div> */}
          {/* <div className="mb-2">
            <img src="https://placehold.co/20" alt="Email" />{" "}
            london@kingseducation.com
          </div> */}
          {/* <div>
            <img src="https://placehold.co/20" alt="Region" /> London Borough of
            Bromley
          </div> */}
        </div>
      </div>
      <Link to='/review'>
      <div className="bg-blue-700 text-white p-4 rounded-lg shadow-lg sticky top-20 mt-4 cursor-pointer">
        {/* <img src="https://placehold.co/20" alt="Review" className="mb-2" /> */}
        Write your school review
      </div>
      </Link> 
    </div>
  </div>
  </motion.div>
</div>
</div>
  );
  };
  
  export default SchoolDetailPage;


    // <div>
    //   <Navbar/>
    // <div className="p-4 border border-gray-300">
    // <motion.div
    //       initial={{ opacity: 0, y: -20 }}
    //       animate={{ opacity: 1, y: 4 }}
    //       transition={{ duration: 1 }}
    //     > 
    //   <div className="mb-4">
    //     <h1 className="text-2xl font-bold">{school.name}</h1>
    //   </div>

    //   <div className="flex">
    //     <div className="w-1/2 mr-4">
    //     <img src={school.image} alt="School" className="max-w-full h-auto" />


    //   {/* <img src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?q=80&w=1540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="School" className="max-w-full h-auto" /> */}
    //     </div>

    //     <div className="w-1/2">
    //       <div className="mb-4">
    //         <h2 className="text-lg font-bold"> {school.level} </h2>
           
    //       </div>

    //       <div className="mb-4">
    //         <h2 className="text-lg font-bold"> {school.numStudents} </h2>
    //         {/* <p>500</p> */}
    //       </div>

    //       <div className="mb-4">
    //         <h2 className="text-lg font-bold">{school.type}</h2>
    //         {/* <p>Private/Public</p> */}
    //       </div>

    //       {/* <div className="mb-4">
    //         <h2 className="text-lg font-bold">{school.tuitionFees}</h2>
    //         <p>$10,000/year</p>
    //       </div> */}

    //       <div className="mb-4">
    //         <h2 className="text-lg font-bold">{school.location}</h2>
            
    //       </div>

    //       <div className="mb-4">
    //         <h2 className="text-lg font-bold">{school.contact}</h2>
    //         {/* <p>Phone: 123-456-7890</p>
    //         <p>Email: school@example.com</p> */}
    //       </div>

    //       <span className="mb-4" flex>
    //         <h2 className="text-lg font-bold">{school.reviews}</h2>
    //         {/* <p>Review 1</p>
    //         <p>Review 2</p>
    //         <p>Review 3</p> */}
    //       </span>

    //       <div className="mb-4">
    //         <h2 className="text-lg font-bold">School Website</h2>
    //         <Link className="text-blue-500 underline" to='/review'> leave a review</Link>
    //       </div>
    //     </div>
    //   </div>
    //   </motion.div>
    // </div>
    // </div>