"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-red-500 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300">
          Kurukshetra
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          ></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-1/2 transform md:translate-x-0 -translate-x-1/2 md:bg-transparent bg-[#0a0d16]/80 backdrop-blur-md md:w-auto w-3/4 md:py-0 py-6 px-6 rounded-lg shadow-lg md:shadow-none transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          {["Home", "About", "Our Team", "Contact Us"].map((item, index) => (
            <li key={index} className="group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="relative inline-block text-white font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-white/10"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
