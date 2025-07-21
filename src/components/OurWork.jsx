"use client";
import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  "All Projects",
  "Mobile Application",
  "Web Application",
  "Web Design",
  "Social Media",
  "Development",
];

const projects = [
  {
    id: 1,
    image: "/assets/images/services/our-work-1.png",
    title: "Spacebook - Business Accounting Dashboard Design",
    price: "$3000",
    categories: ["SaaS", "Dashboard"],
  },
  {
    id: 2,
    image: "/assets/images/services/our-work-5.png",
    title: "Kodezi - AI-Powered Code Generator",
    price: "$2200",
    categories: ["SaaS", "Web Design", "Branding", "Design System"],
  },
  {
    id: 3,
    image: "/assets/images/services/our-work-3.png",
    title: "Off White - Modern Fashion Website",
    price: "$2500",
    categories: ["E-commerce", "Branding", "Web Design"],
  },
  {
    id: 4,
    image: "/assets/images/services/our-work-4.png",
    title: "Solon - Crypto Trading Platform UX",
    price: "$2800",
    categories: ["SaaS", "Web Design", "Branding"],
  },
];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("All Projects");

  return (
    <div className=" mx-auto py-16 px-2 sm:px-6 lg:px-16 md:px-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-blue-600 uppercase font-semibold">Our Work</p>
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Our Latest Projects
        </h2>
        <p className="text-gray-500 mt-2">
          Turn your ideas into impactful solutions like them!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 ">
        <div className="border-2 p-1 flex gap-3 border-gray-400 rounded-lg ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md  text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
        </div>
       
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative w-full  h-80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-800 text-base">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-bold text-sm">
                  {project.price}
                </p>
              </div>
              <div className="text-xs text-gray-400 flex flex-wrap gap-1">
                {project.categories.map((cat, index) => (
                  <span key={index} className="after:content-['•'] last:after:hidden">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
