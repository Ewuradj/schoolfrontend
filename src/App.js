import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from './pages/LandingPage/landingPage';
import AboutPage from './pages/AboutPage/aboutPage';
import SchoolDetailPage from './pages/SchooldetailPage/schooldetailPage';
import AdminDashboard from './pages/AdminDashboard/adminDashboard';
import AdminLogin from './pages/AdminLogin/adminLogin';
import Sidebar from './components/Sidebar/sidebar';
import LoginPage from './pages/LoginPage/loginPage';
import SignupPage from './pages/SignupPage/signupPage';
import ReviewForm from './pages/ReviewformPage/reviewformPage';
import TermsConditions from './components/Terms-Conditions/termsConditions';
import Contact from './components/ContactUs/Contact';
import SignupModal from './components/SignupModal/signupModal';
import SchoolList from './components/schoolList';
import SearchResults from './components/SearchResults.jsx';
import EachSchoolsPage from './pages/EachSchoolsPage/EachSchoolsPage.jsx';
import Section from './components/FeaturedSchools/featuredSchools.jsx';
import SchoolComparison from './components/SchoolComparison.jsx';






function App() {
  const router = createBrowserRouter ([
    {path: "/", element: <LandingPage/>},
  
    {path: "/aboutpage", element: <AboutPage/>},
    {path: "/schooldetailpage/:schoolId", element: <SchoolDetailPage/>},
    {path: "/eachschoolpage/:schoolId", element: <EachSchoolsPage/>},
  
    {path: "/admindashboard", element: <AdminDashboard/>},
    {path: "/adminlogin", element: <AdminLogin/>},
    
    {path: "/sidebar", element: <Sidebar/>},
    {path: "/loginpage", element: <LoginPage/>},
    {path: "/signup", element: <SignupPage/>},
    {path: "/review", element: <ReviewForm/>},
    {path: "/terms", element: <TermsConditions/>},
    {path: "/contact", element: <Contact/>},
    {path: "/signupmodal", element: <SignupModal/>},
    {path: "/schools", element: <SchoolList/>},
    {path: "/searchresults", element: <SearchResults/>},
    {path: "/section", element: <Section/>},
    {path: "/comparison", element: <SchoolComparison/>},



  


    

  ])
  
  return (
    <>
    <RouterProvider router={router}/>
    

   </>
  );
}

export default App;