// import React, { useEffect, useState } from "react";
// import logo from '../../images/connectLogo-removebg-preview.png';
// import styles from './navbar.module.css'; // Import CSS module

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);
//   const menuLinks = [
//     { name: "HOME", link: "/#landingpage" },
//     { name: "ABOUT", link: "#aboutpage" },
//     { name: "SCHOOLS", link: "#skills" },
//     { name: "DASHBOARD", link: "#experience" },
//     { name: "CONTACT", link: "#contact" },
//     { name: "SIGN UP", link: "#projects" },
//     { name: "LOGIN", link: "#projects" },
//   ];
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const nav = document.querySelector("nav");
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     });
//   }, []);
//   return (
//     <nav
//       className={`fixed w-full left-0 top-0 z-[999] ${
//         sticky ? "bg-white/60  text-gray-900" : "text-white"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="mx-7">
//           <h4 className="text-4xl uppercase font-bold">
//           <img src={logo} alt="Logo" className={styles['navbar-logo__img']} />
//           </h4>
//         </div>
//         <div
//           className={` ${
//             sticky ? "md:bg-white/0 bg-white" : "bg-white"
//           } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
//         >
//           <ul className="flex items-center gap-1 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999]  ${
//             open ? "text-gray-900" : "text-gray-100"
//           } text-3xl md:hidden m-5`}
//         >
//           <ion-icon name="menu"></ion-icon>
//         </div>
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${
//         open ? "right-0" : "right-[-100%]"
//       }`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li
//                 onClick={() => setOpen(false)}
//                 key={i}
//                 className="px-6 hover:text-cyan-600"
//               >
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



























import React from 'react';
import styles from './navbar.module.css'; // Import CSS module
import logo from '../../images/connectLogo-removebg-preview.png';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';

const Navbar = () => {
  return (
    <nav className={styles.navbar}> {/* Use CSS Module class */}
      <div className={styles['navbar-logo']}> {/* Use CSS Module class */}
        <img src={logo} alt="Logo" className={styles['navbar-logo__img']} /> {/* Use CSS Module class */}
      </div>
      
      <ul className={styles['navbar-items']}> {/* Use CSS Module class */}
        <li className={styles['navbar-item']}> {/* Use CSS Module class */}
          <Link to="/">HOME</Link>
        </li>
        <li className={styles['navbar-item']}> {/* Use CSS Module class */}
          <Link to='/aboutpage'>ABOUT</Link>
        </li>
        <li className={styles['navbar-item']}> {/* Use CSS Module class */}
          <Link to='/schools'>SCHOOLS</Link>
        </li>
        <li className={styles['navbar-item']}> {/* Use CSS Module class */}
          <Link to='/adminlogin'>DASHBOARD</Link>
        </li> 
          
        
        <li className={styles['navbar-item']}> 
          <Link to='/contact'>CONTACT </Link>
        </li>
        <li className={styles['navbar-item']}> {/* Use CSS Module class */}
        <button className="mr-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/signup">SIGN UP</Link>
        </button>
        </li>
        <li className={styles['navbar-item']}> {/* Use CSS Module class */}
        <button className="mr-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/loginpage">LOGIN</Link>
        </button>
        </li>
      </ul>
        {/* <DarkModeToggle/> */}
    </nav>
  );
};

export default Navbar;
