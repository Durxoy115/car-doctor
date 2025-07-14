import React from 'react';

const images = Array.from({ length: 31 }, (_, i) => `https://i.pravatar.cc/60?img=${i + 1}`);

export default function OurTeam() {
  return (
    <div className="bg-[#f9fbfd] py-16 ">
      <div className="max-w-10/12 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Circle Image Container */}
       <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mb-10 lg:mb-0">
  
  {/* Center Image */}
  <img
    src={images[0]}
    alt=""
    className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full transform -translate-x-1/2 -translate-y-1/2"
  />

  {/* Circle 1: 6 images */}
  {images.slice(1, 7).map((src, index) => {
    const angle = (360 / 6) * index;
    return (
      <img
        key={index}
        src={src}
        alt=""
        className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full"
        style={{
          top: `calc(50% + ${70 * Math.sin((angle * Math.PI) / 180)}px)`,  // reduced from 100
          left: `calc(50% + ${70 * Math.cos((angle * Math.PI) / 180)}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  })}

  {/* Circle 2: 9 images */}
  {images.slice(7, 16).map((src, index) => {
    const angle = (360 / 9) * index;
    return (
      <img
        key={index + 6}
        src={src}
        alt=""
        className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        style={{
          top: `calc(50% + ${115 * Math.sin((angle * Math.PI) / 180)}px)`, // reduced from 150
          left: `calc(50% + ${115 * Math.cos((angle * Math.PI) / 180)}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  })}

  {/* Circle 3: 15 images */}
  {images.slice(16, 31).map((src, index) => {
    const angle = (360 / 15) * index;
    return (
      <img
        key={index + 15}
        src={src}
        alt=""
        className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full"
        style={{
          top: `calc(50% + ${155 * Math.sin((angle * Math.PI) / 180)}px)`, // reduced from 200
          left: `calc(50% + ${155 * Math.cos((angle * Math.PI) / 180)}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  })}
</div>


        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Join Our Team of Creators,<br />
            Builders, and Thinkers
          </h2>
          <p className="text-gray-600 mt-4">
            We’re always looking for curious minds and passionate hearts to grow with us.
            If you’re ready to make an impact and be part of something meaningful,
            we’d love to hear from you.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
