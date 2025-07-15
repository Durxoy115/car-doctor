import React from "react";
import JoinTeamSection from "../JoinTeamSection";

export default function About() {
  return (
    <div className="">
      <div className="grid grid-cols-12  px-10 py-8"  style={{ backgroundColor: "#FBFDFF" }}>
        {/* Left Side (Text) */}
        <div className="col-span-6 p-8">
            <p className="text-blue-400">Zay Global Solution</p>
          <h2 className="text-3xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-base text-gray-600">
            A software designer hoping to help shape the human world by creating
            usable software products.Our secret sauce ensures scalability and attracts talented, creative people who aspire to achieve incredible things together—while having some fun along the way. We're a global multi-specialty design experts of strategists, designers, and engineers building unicorn brands and creating people -friendly experiences.
            Our secret sauce ensures scalability and attracts talented, creative people who aspire to achieve incredible things together—while having some fun along the way. We're a global multi-specialty design experts of strategists, designers, and engineers building unicorn brands and creating people -friendly experiences.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="col-span-6 flex justify-center">
          <div className="mr-2">
            <img
              src="/assets/images/about_us/person.jpg"
              alt="ZGS"
              className="h-50 w-40"
            />
            <img
              src="/assets/images/about_us/person.jpg"
              alt="ZGS"
              className="h-20 w-40 mt-2"
            />
          </div>
          <div>
            <img
              src="/assets/images/about_us/person.jpg"
              alt="ZGS"
              className="h-20 w-40"
            />
            <img
              src="/assets/images/about_us/person.jpg"
              alt="ZGS"
              className="h-50 w-40 mt-2"
            />
          </div>

        </div>
      </div>
      <div className="w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
    <div className="items-center mt-8">
        <h1 className="text-3xl font-bold text-center">Meet Our Team</h1>
        <p className="text-center">Meet our dedicated full-time team members — a group of passionate professionals committed to making your life better, one meaningful step at a time.</p>
    </div>
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-8">
            {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img
                src="/assets/images/about_us/person.jpg"
                alt={`Team Member ${index + 1}`}
                className="w-48 h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">Team Member {index + 1}</h3>
                <p className="text-gray-600">abcd@gmail.com</p>
            </div>
            ))}
        </div>
    </div>
    <JoinTeamSection />
    </div>
  );
}
