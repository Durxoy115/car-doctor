import React from 'react';

export default function HomeAbout() {
  return (
    <div className='px-4 sm:px-6 md:px-20 lg:px-20 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 items-center'>

    {/* Text Section */}
    <div className='text-left'>
      <p className='text-blue-500 font-semibold mb-2'>About ZGS</p>
      <h1 className='text-3xl font-bold mb-4'>Get To Know About Us</h1>
      <p className='text-gray-600 leading-relaxed'>
        Our secret sauce ensures scalability and attracts talented, creative people who aspire to achieve incredible things together—while having some fun along the way.
        We're a global multi-specialty design team of strategists, designers, and engineers building unicorn brands and creating people-friendly experiences.
      </p>
    </div>
  
    {/* Image Section */}
    <div className='flex justify-center lg:justify-end mt-8 lg:mt-0'>
      <img
        src="/assets/images/about_us/about_home.jpg"
        alt="About Us"
        className='w-full max-w-[500px] rounded-lg object-cover'
      />
    </div>
  
  </div>
  

  );
}
