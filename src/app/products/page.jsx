import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    title: "Digital Wallet Application",
    description:
      "Create a secure and intuitive digital wallet app powered by Chakra. From a seamless onboarding flow to interactive card views, this app is designed for modern finance experiences.",
    image: "/assets/images/products/product-img-1.png",
  },
  {
    id: 2,
    title: "Only - To Do Application",
    description:
      "Stay organized and productive with this sleek and simple to-do list app. Built with beautiful UI elements and user-first design patterns.",
    image: "/assets/images/products/product-img-2.jpg",
  },
  {
    id: 3,
    title: "Digital Wallet Application",
    description:
      "Another version of our popular wallet app UI with improved performance, dark mode support, and intuitive drag-drop card layouts.",
    image: "/assets/images/products/product-img-1.png",
  },
  {
    id: 4,
    title: "Only - To Do Application",
    description:
      "The productivity app that helps you stay on track with your daily goals, project deadlines, and routine habits.",
    image: "/assets/images/products/product-img-2.jpg",
  },
];

export default function Page() {
  return (
    <div className="max-w-10/12 mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-500 font-semibold">OUR FEATURED</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">Explore Our Products</h2>
        <p className="text-gray-600 mt-2">
          Turn your ideas into impactful solutions like them!
        </p>
      </div>

      {/* Product Grid */}
      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Preview ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}