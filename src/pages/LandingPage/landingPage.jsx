import React, { useEffect } from 'react';
import Section from '../../components/FeaturedSchools/featuredSchools';
import Navbar from '../../components/Navbar/navbar';
import { motion } from 'framer-motion';
import ParentResources from '../../components/ParentsResources';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/footer';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Testimonials from '../../components/Testimonials/testimonials';

const LandingPage = () => {
  
  const [text] = useTypewriter({
    words: ["Welcome to SchoolConnect"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('backToTopButton');
      if (button) {
        button.style.display = window.scrollY > 100 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://galaxy.edu.gh/wp-content/uploads/2019/08/Photo-15-05-2019-9-07-13-AM-1.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 group">
              <div className="bg-gradient-to-r from-primary to-primary-transparent h-5 w-1/2 absolute left-0 bottom-[-30px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-6xl font-extrabold leading-tight mb-4">
               <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="white" />
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Simplify Your School Search with Ease
            </p>
            <a
              href="/aboutpage"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </motion.div>
      <hr />
      <AboutUs />
      <Section />
      <Testimonials/>
      <ParentResources />
      <br /><br /><br /><br /><br /><br />
      <Footer />
      <div className="fixed bottom-0 right-0 p-4">
  <button
    className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
    onClick= {backToTop}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
</div>

    </div>
  );
};

export default LandingPage;