import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-yellow-400">404</h1>
      <p className="text-2xl mt-4">Page not found</p>
      <p className="text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
