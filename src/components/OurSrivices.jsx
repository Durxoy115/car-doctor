import React from 'react';
import { FaCode, FaCloud, FaComments, FaPalette, FaDatabase } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Development Services',
    description: 'Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.',
    icon: <FaCode className="text-blue-600 text-2xl" />,
  },
  {
    id: 2,
    title: 'Cloud Services',
    description: 'Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations to optimize your financial habits.',
    icon: <FaCloud className="text-blue-600 text-2xl" />,
  },
  {
    id: 3,
    title: 'Consultation Services',
    description: 'Choose from a range of colors, patterns, and designs to customize the look of your card and reflect your unique personality.',
    icon: <FaComments className="text-blue-600 text-2xl" />,
  },
  {
    id: 4,
    title: 'UX Design',
    description: 'Track your spending patterns, analyze income or expenses easily, and optimize your processes with personalized recommendations.',
    icon: <FaPalette className="text-blue-600 text-2xl" />,
  },
  {
    id: 5,
    title: 'Big Data & Data Science',
    description: 'Choose from a range of colors, patterns, and designs to customize the look of your card and reflect your unique personality.',
    icon: <FaDatabase className="text-blue-600 text-2xl" />,
  },
];

export default function OurServices() {
  return (
    <div className="mx-auto px-4 max-w-7xl py-12">
      <p className="text-center text-sm text-blue-500 font-medium">OUR SERVICES</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        The Best Experience<br />With Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm  p-5 flex flex-col gap-3"style={{backgroundColor:"#F8FBFF"}}>
            <div>{service.icon}</div>
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.description}</p>
            <a href="#" className="text-blue-600 font-medium text-sm mt-2">Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
