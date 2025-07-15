import Image from "next/image";
import React from "react";

export default function BGImage() {
  return (
    <div>
      <div className="relative h-[350px] md:h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="/assets/bg/bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 max-w-xl">
          {/* <p className="uppercase text-sm tracking-wide mb-2">Our Blog</p> */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Innovative Solutions To Grow Your Brand
          </h2>
          <p className="text-sm md:text-base">
            Cutting-edge Design & Development agency for businesses that saving
            your time and money with an efficient process.
          </p>
          <div className="mt-4">
            <button className="text-white rounded-md bg-blue-900 p-2 mr-2">
              Book a Strategy Call
            </button>
            <button className="text-white underline border border-white rounded-lg px-4 py-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
