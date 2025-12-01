import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-black bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          The Ultimate Driving Machine
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience luxury, performance, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/models"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Explore Models
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Book Test Drive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
