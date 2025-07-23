import OurWork from '@/components/OurWork'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[350px] flex items-center justify-center text-white">
        <Image
          src="/assets/images/services/allservices.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          priority
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-y-6 gap-x-8 md:gap-x-16 lg:gap-x-32 xl:gap-x-48">

            {/* Left Side */}
            <div className="w-full md:w-1/2 text-start">
              <p className="text-sm sm:text-base text-white">SERVICES</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 leading-snug">
                Cloud-Based IT Solutions With Zay Global Solutions
              </h1>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 text-start text-sm sm:text-base">
              <p className="text-white">
                We are passionate about Front-End Development. We are looking for talented and motivated individuals who share our vision and want to be part of a dynamic and innovative team.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Our Work Section */}
      <OurWork />
    </div>
  )
}
