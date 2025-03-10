import React, { useState } from "react";
import logo from "./group.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="bg-[#FFF9F4]">
      <div className="navbar bg-base-100 pt-5 pb-4 px-6 sm:px-4 md:px-6 lg:px-12 xl:px-40">
        <div className="flex items-center justify-between w-full">
          <div className="navbar-start">
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <div className="navbar-end flex items-center space-x-8 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
            <div className="hidden md:flex items-center space-x-8 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
              <a
                href="#"
                className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500"
              >
                Our Portfolio
              </a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500"
              >
                Our Team
              </a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500"
              >
                Contact Us
              </a>
            </div>
            <a className="bg-pink-500 text-white px-8 md:px-10 lg:px-12 xl:px-15 py-3 rounded-md hover:bg-pink-600">
              Login
            </a>
            <button
              onClick={toggleMenu}
              className="block md:hidden text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-[#FFF9F4] space-y-4 pt-5 pb-3 px-6`}
        >
          <a
            href="#"
            className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500 block"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500 block"
          >
            Our Portfolio
          </a>
          <a
            href="#"
            className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500 block"
          >
            Our Team
          </a>
          <a
            href="#"
            className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-800 hover:text-red-500 block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
