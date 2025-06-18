import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/BackgroundImage.jpg';

export const Homepage = () => {
  return (
  
      <div 
        className="flex flex-col items-center justify-center gap-8 min-h-screen bg-cover bg-center bg-no-repeat text-center p-6"
        style={{ backgroundImage: `url('${BackgroundImage}')` }}
      >

      {/* Overlay for better readability */}
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-white animate-fadeIn">
          Welcome to <span className="text-yellow-300">BlogsApp</span>
        </h1>

        {/* Subtext */}
        <p className="text-white text-xl max-w-2xl leading-relaxed">
          Discover insightful stories, share your thoughts, and connect with a community of passionate writers.
        </p>

        {/* Decorative Element */}
        <div className="w-16 h-1 bg-yellow-300 rounded-full"></div>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4 mt-6">
          {/* <Link to="/BlogsPage" className="px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
            Explore Blogs
          </Link> */}
          <Link to="/blogs" className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            Start Writing
          </Link>
        </div>
      </div>
    </div>
  );
};