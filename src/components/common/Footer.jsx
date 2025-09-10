import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine, RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom"; // ✅ Import Link
import {FiPhoneCall} from "react-icons/fi"
const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className="mb-6 font-medium text-gray-700 text-sm">
            Sign up and get 10% off your first order.
          </p>

          {/* Newsletter form */}
          <form className="flex">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            />
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-black transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black transition-colors">
            Men's bottom wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black transition-colors">
                Women's bottom wear
              </Link>
            </li>
          </ul>
        </div>
        {/* support links */}
          <div>
          <h3 className="text-lg text-gray-800 mb-4">Supports</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-black transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black transition-colors">
              About us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black transition-colors">
            FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-black transition-colors">
              Features
              </Link>
            </li>
          </ul>
        </div>

        {/* follow us  */}
        <div>
            <h3 className="text-lg text-gray-800 mb-4">Follow us</h3>
            <div className="flex  items-center space-x-4  mb-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrs" className="hover:text-gray-300">
                <TbBrandMeta className="h-5 w-5"/></a>
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrs" className="hover:text-gray-300">
                <IoLogoInstagram className="h-5 w-5"/></a>
                 
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrs" className="hover:text-gray-300">
                <RiTwitterXLine className="h-5 w-5"/></a>
            </div>
            <p className="text-gray-500 ">Call us</p>
            <p><FiPhoneCall className="inline-block mr-2"/>+9234495750</p>

        </div>
      </div>

      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-gray-200 border-t pt-6">
        <p className="text-gray-500 text-sm  text-center tracking-tighter">@ 2025 , Digitalpine , All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
