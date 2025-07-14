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
        <div className="ml-auto">
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
          <div className="flex items-center justify-end">
            <p className=" text-sm whitespace-nowrap">We Accept:</p>
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

      {/* <a href="#" className="text-white hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.318 3.608 1.293.975.975 1.231 2.242 1.293 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.318 2.633-1.293 3.608-.975.975-2.242 1.231-3.608 1.293-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.318-3.608-1.293-.975-.975-1.231-2.242-1.293-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.318-2.633 1.293-3.608.975-.975 2.242-1.231 3.608-1.293 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.953.072-1.315.064-2.554.34-3.51.916-.956.576-1.735 1.355-2.311 2.311-.576.956-.852 2.195-.916 3.51-.058 1.283-.072 1.694-.072 4.953s.014 3.67.072 4.953c.064 1.315.34 2.554.916 3.51.576.956 1.355 1.735 2.311 2.311.956.576 2.195.852 3.51.916 1.283.058 1.694.072 4.953.072s3.67-.014 4.953-.072c1.315-.064 2.554-.34 3.51-.916.956-.576 1.735-1.355 2.311-2.311.576-.956.852-2.195.916-3.51.058-1.283.072-1.694.072-4.953s-.014-3.67-.072-4.953c-.064-1.315-.34-2.554-.916-3.51-.576-.956-1.355-1.735-2.311-2.311-.956-.576-2.195-.852-3.51-.916-1.283-.058-1.694-.072-4.953-.072z"/>
              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162m0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm7.938-12.838c0 .553-.447 1-1 1s-1-.447-1-1.001c0-.552.448-1.001 1-1.001s1 .449 1 1.001z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.12v-3.622h3.12v-2.671c0-3.085 1.894-4.764 4.658-4.764 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.325-.593 1.325-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.87 13.87 0 011.671 3.149a4.959 4.959 0 001.523 6.574 4.903 4.903 0 01-2.23-.616c-.053 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.457 0-.221-.005-.439-.015-.656A10.008 10.008 0 0024 4.57z"/>
            </svg>
          </a> */}

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
