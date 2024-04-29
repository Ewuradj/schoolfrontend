import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupModal({ onSignup, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    // Validate password
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    // Set form errors
    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Here you can handle form submission
      console.log('Form submitted:', formData);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      // Call the onSignup function to redirect to the review page
      onSignup();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-2xl font-bold pb-5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4 ${
                formErrors.name && 'border-red-500'
              }`}
              placeholder="Andrew Jackson"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4 ${
                formErrors.email && 'border-red-500'
              }`}
              placeholder="andrew@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4 ${
                formErrors.password && 'border-red-500'
              }`}
              placeholder="*********"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm">{formErrors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-purple-700 focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Register
            </button>
            <div className="flex items-center text-sm">
              <p>Already have an account?</p>
              <Link to="/loginpage">
                <p className="underline cursor-pointer ml-1">Sign in</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;