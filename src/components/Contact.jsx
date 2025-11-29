import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      
     
      <header className="bg-black p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">BMW Contact Us</h1>
        <p className="text-gray-400 mt-2">We'd love to hear from you</p>
      </header>

      <section className="flex justify-center items-center p-6">
        <form className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6">
          <h2 className="text-2xl font-semibold text-center">Get in Touch</h2>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Message</label>
            <textarea
              placeholder="Your message..."
              rows="5"
              className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      
      <footer className="bg-black p-6 text-center text-gray-400">
        <p>&copy; 2025 BMW. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
