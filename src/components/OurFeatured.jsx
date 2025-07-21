import React from 'react';
import Image from 'next/image';

export default function OurFeatured() {
  const products = [
    "Digital Wallet Application",
    "Only - To Do Application",
    "Digital Wallet Application",
    "Only - To Do Application",
    "Digital Wallet Application",
  ];

  return (
    <section className="py-12 px-4 md:px-16 lg:px-16 mx-auto">
      <p className="text-sm text-blue-500 uppercase tracking-wide mb-2 text-center">Our Featured</p>
      <h2 className="text-3xl font-bold mb-2 text-center">Explore Our Products</h2>
      <p className="text-gray-600 mb-8 text-center">
        Turn your ideas into impactful solutions like them!
      </p>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Product List */}
        <div className="relative space-y-4 w-full lg:w-1/2">

{/* Vertical Line with Water Drop */}
<div className="absolute top-0 left-0 h-full flex flex-col items-center">
  {/* Water Drop Head */}
  <div className="w-2 h-2 bg-black rounded-full"></div>

  {/* Gradient Line */}
  <div className="w-[2px] flex-1 bg-gradient-to-b from-black via-gray-400 to-transparent"></div>
</div>

{/* Buttons */}
<div className="pl-6"> {/* Padding-left to avoid overlapping the line */}
  {products.map((item, index) => (
    <button
      key={index}
      className={`w-full text-left px-4 py-2 rounded-lg ${
        index === 0
          ? 'bg-blue-100 font-semibold'
          : 'hover:bg-gray-100'
      }`}
    >
      {item}
    </button>
  ))}
</div>

</div>


        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/products/featured.png" // replace with actual image
            alt="Product Preview"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
