"use client";
import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      title: "Basic",
      description: "For individuals",
      price: 99,
      features: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "Normal support",
        "Up to 5 team members"
      ],
    },
    {
      title: "Pro",
      description: "For startups",
      price: 199,
      features: [
        "All analytics features",
        "Up to 1,000,000 tracked visits",
        "Premium support",
        "Up to 10 team members"
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      description: "For big companies",
      price: 399,
      features: [
        "All analytics features",
        "Up to 5,000,000 tracked visits",
        "Dedicated support",
        "Up to 50 team members"
      ],
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 md:px-16 lg:px-16 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
      <p className="text-center text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.
      </p>

      <div className="flex justify-center mb-10">
        <div className="flex items-center space-x-2 bg-gray-200 rounded-full p-1">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-1 rounded-full ${
              billingCycle === 'monthly' ? 'bg-white text-blue-600' : ''
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annually')}
            className={`px-4 py-1 rounded-full ${
              billingCycle === 'annually' ? 'bg-white text-blue-600' : ''
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
     <div className='flex justify-center'>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-7xl  ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              plan.popular ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            <p className={`font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
              {plan.description}
            </p>
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
            <p className="text-3xl font-bold mb-4">${plan.price} <span className="text-sm font-normal">/{billingCycle}</span></p>

            <ul className={`space-y-2 mb-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-medium ${
                plan.popular
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Get Started →
            </button>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}
