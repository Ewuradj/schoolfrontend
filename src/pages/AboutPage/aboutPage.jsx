import React from 'react'
import Navbar from '../../components/Navbar/navbar'

const AboutPage = () => {
  return (
    <div id='aboutpage'>
        <Navbar/>
        <section class="bg-gray-100">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p class="mt-4 text-gray-600 text-lg">Welcome to the SchoolConnect, your go-to platform for connecting parents with schools in their local area. Our mission is to simplify the school selection process and empower parents to make informed decisions about their child's education.
                </p><br/>
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl" >Our Vision</h2>
        <p class= "mt-4 text-gray-600 text-lg" >
          We envision a world where every child has access to quality education that caters to their unique needs and aspirations. <br/>By providing a centralized platform, we strive to make the process of finding and evaluating schools efficient, transparent, and convenient for parents.
        </p><br/>
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl" >What We Offer</h2>
        <ul class= "mt-4 text-gray-600 text-lg" >
          <li>Extensive School Database</li>
          <li>User-Friendly Search Functionality</li>
          <li>Detailed School Profiles</li>
          <li>Parent Reviews and Ratings</li>
         
        </ul>
      
        <p class= "mt-4 text-gray-600 text-lg" >
      
          At SchoolConnect, we are committed to providing a transparent and user-friendly platform that simplifies the school search process. We understand the significance of finding the right educational institution for your child's growth and development, and we are dedicated to supporting you every step of the way. We invite you to explore SchoolConnect, discover the diverse range of educational opportunities available.
        </p>
                {/* <div class="mt-8">
                    <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span class="ml-2">&#8594;</span></a>
                </div> */}
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md "/>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default AboutPage