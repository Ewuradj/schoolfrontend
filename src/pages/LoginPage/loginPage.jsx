import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    if (username && email && password) {
      // Perform form submission logic
      console.log('Form submitted!');
    } else {
      console.log('Please fill in all fields!');
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="flex justify-center items-center h-screen bg-sky-50">
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg pt-54 shadow-lg p-5 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold pb-5">SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">
              Your username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="john_doe"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="andrew@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Submit
            </button>
            <div className="flex items-center text-sm">
              <p>New here?</p>
              <Link to='/signup'>
              <p className="underline cursor-pointer ml-1">Register</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;