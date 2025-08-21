import React from 'react'
import { NavLink } from 'react-router';

function Errorpage() {
 return (
    <div className="bg-gray-100 flex  items-center justify-center h-screen px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
        <p className="text-3xl text-gray-800 font-semibold mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-3 rounded-full transition duration-300"
        >
          Back to Home
        </NavLink>

      
      </div>
    </div>
  );
}

export default Errorpage
