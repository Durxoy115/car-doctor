"use client";   
import { useState } from 'react';

const dummySlides = [
  {
    quote: "Thumbnail arrow editor layer community underline. Move undo select content align layout. Community subtract scrolling layout select bullet move inspect select vertical.",
    author: "John Ford, Job Title, Company, Inc."
  },
  {
    quote: "Another testimonial goes here. This content is part of the slider, allowing you to switch between multiple text entries easily.",
    author: "Jane Doe, Marketing Lead, Example Corp."
  },
  {
    quote: "This is a third dummy testimonial. You can add as many slides as you need in this section.",
    author: "Alex Smith, Developer, Tech Solutions."
  }
];

export default function JoinTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? dummySlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dummySlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-50 py-10 px-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Text Slider Section */}
        <div>
          <div className="text-5xl text-blue-200 mb-4">“</div>
          <p className="text-gray-800 mb-4">{dummySlides[currentIndex].quote}</p>
          <p className="text-sm text-gray-500">{dummySlides[currentIndex].author}</p>
          
          {/* Slider Controls */}
          <div className="flex items-center space-x-4 mt-6">
            <button onClick={handlePrev} className="px-2 py-1 border rounded">‹</button>
            <div className="flex space-x-1">
              {dummySlides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="px-2 py-1 border rounded">›</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://i.pravatar.cc/200"
            alt="Team Member"
            className="w-40 h-40 rounded-lg object-cover"
          />
        </div>

        {/* Join Us Section */}
        <div className="bg-blue-700 text-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Join Our Team</h2>
          <p className="text-sm mb-4">
            We're always looking for curious minds and passionate hearts to grow with us.
            If you're ready to make an impact and be part of something meaningful, we'd love to hear from you.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}
