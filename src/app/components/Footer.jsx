import React from "react";
import {
  FaCcVisa,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-10/12 mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Company Section */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-blue-500 text-2xl font-bold">ZGS</span>
          </div>
          <p className="text-sm">
            A software designer hoping to help shape the human world by creating
            usable software products.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Career</li>
            <li>Our Stories</li>
            <li>Contact US</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Automations</li>
            <li>Small Scale Business</li>
            <li>Large Scale Business</li>
            <li>Internets</li>
            <li>CRM (Internal tools)</li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
          <ul className="space-y-2 text-sm">
            <li>Marketing</li>
            <li>Information Technology</li>
            <li>Customer Service</li>
            <li>Learning & Development</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="md:ml-auto lg:ml-auto">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm ">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Glossary of Terms</li>
            <li>Community</li>
            <li>News</li>
          </ul>
        </div>
      </div>
      {/* Contact Section */}
      <div className="max-w-10/12 mx-auto px-4 mt-2 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4"></div>
      <div className="max-w-10/12 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-1">
        <div>
          <p className="text-sm mb-4">Let's Work Together</p>
          <button className="btn btn-primary btn-sm rounded-full text-white flex items-center">
            <span>Contact Us</span>
            <span className="ml-2">➔</span>
          </button>
        </div>
        <div className="flex flex-col items-end space-y-2 mt-4 md:mt-0">
          <div className="flex items-center  flex-wrap sm:justify-end justify-start">
            <p className=" text-sm whitespace-nowrap space-x-1 ">We Accept:</p>
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
            <FaCcVisa className="w-10 h-8" />
          </div>

          {/* Social Media Icon */}
          <div className="flex space-x-2">
            <div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
              <FaLinkedin className="h-5 w-5" />
            </div>
            <div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-800 transition-colors">
              <FaFacebook className="h-5 w-5" />
            </div>
            <div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
              <FaTwitter className="h-5 w-5" />
            </div>
            <div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-pink-700 transition-colors">
              <FaInstagramSquare className="h-5 w-5" />
            </div>
            <div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-red-800 transition-colors">
              <FaYoutube className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section with Payment and Social Icons */}
      <div className="max-w-10/12 mx-auto px-4 mt-2 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <div className="w-full flex justify-center">
          <p className="text-xs text-gray-400 text-center">
            Copyright © 2025 Easy Global Solution
          </p>
        </div>
      </div>
    </footer>
  );
}
