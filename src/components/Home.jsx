import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';


const Home = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      <img
        src="https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qk1XfGVufDB8fDB8fHww" 
        alt="BMW Car" 
        className="object-cover w-full h-full opacity-80"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">The Ultimate Driving Machine</h1>
        <p className="text-xl md:text-2xl mb-8">Experience luxury, performance, and innovation.</p>
        <div className="flex gap-4">
          <Link to="/models" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition duration-300 hover:cursor-pointer">Explore Models</Link>
          <Link to="/contact" className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition duration-300 hover:cursor-pointer">Book Test Drive</Link>
        </div>
      </div>
     
    </div>
    
  )
}

export default Home;
