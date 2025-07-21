'use client'
import React, { useState } from 'react';

const reviews = [
  { id: 1, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
  { id: 2, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
  { id: 3, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
  { id: 4, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
  { id: 5, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
  { id: 6, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
  { id: 7, name: 'Fabrizio Fernandez', username: '@fabri23x', message: 'Testing out @LaunchUI’s responsive design. My mobile-first heart is doing a happy dance.' },
];

export default function CustomerReview() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">
        We have earned the Trust of <br /> Our Most Valuable Customers
      </h2>
      <p className="text-gray-600 mb-10">
        Here's what people are saying about Launch UI
      </p>

      {/* First Row */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center mx-[-100px]">
          {reviews.slice(0, 4).map((review, index) => (
            <div
              key={review.id}
              onClick={() => setActiveId(review.id)}
              className={`cursor-pointer min-w-[220px] max-w-[250px] border rounded-xl p-4 text-left shadow-sm transition ${
                index === 0 || index === 3
                  ? 'w-[125px] overflow-hidden'
                  : 'w-[250px]'
              } mx-4 ${
                activeId === review.id
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-800'
              }`}
              style={{
                clipPath:
                  index === 0
                    ? 'inset(0 0 0 25% )'
                    : index === 3
                    ? 'inset(0 25% 0 0)'
                    : 'none',
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://i.pravatar.cc/60?img=${review.id}`}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.username}</p>
                </div>
              </div>
              <p className="text-sm">{review.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {reviews.slice(4, 7).map((review) => (
          <div
            key={review.id}
            onClick={() => setActiveId(review.id)}
            className={`cursor-pointer w-[250px] border rounded-xl p-4 text-left shadow-sm ${
              activeId === review.id
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={`https://i.pravatar.cc/60?img=${review.id}`}
                alt={review.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.username}</p>
              </div>
            </div>
            <p className="text-sm">{review.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
