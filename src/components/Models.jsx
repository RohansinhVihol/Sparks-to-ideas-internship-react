import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
        BMW Models
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-16 mb-12">
        <div className="flex flex-col items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1737215189325-3953b03ae847?w=600&auto=format&fit=crop&q=60"
            alt="BMW M1"
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-2xl"
          />
          <p className="mt-6 text-white text-3xl md:text-4xl font-semibold">BMW M1</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/12249443/pexels-photo-12249443.jpeg"
            alt="BMW M2"
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-2xl"
          />
          <p className="mt-6 text-white text-3xl md:text-4xl font-semibold">BMW M2</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1570356528233-b442cf2de345?w=600&auto=format&fit=crop&q=60"
            alt="BMW M3"
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-2xl"
          />
          <p className="mt-6 text-white text-3xl md:text-4xl font-semibold">BMW M3</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-16">
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&auto=format&fit=crop&q=60"
            alt="BMW M4"
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-2xl"
          />
          <p className="mt-6 text-white text-3xl md:text-4xl font-semibold">BMW M4</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1635770311293-b09d08a522fc?w=600&auto=format&fit=crop&q=60"
            alt="BMW M5"
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-2xl"
          />
          <p className="mt-6 text-white text-3xl md:text-4xl font-semibold">BMW M5</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
