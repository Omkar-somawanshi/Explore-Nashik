import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <h1 className="text-7xl font-extrabold text-purple-700">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
