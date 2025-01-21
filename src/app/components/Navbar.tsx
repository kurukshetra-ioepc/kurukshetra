"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#5294ff] to-[#ff3e52] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold transition-transform duration-300 hover:scale-110">
          Kurukshetra
        </div>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1 transition-all"></span>
          <span className="block w-6 h-0.5 bg-white mb-1 transition-all"></span>
          <span className="block w-6 h-0.5 bg-white transition-all"></span>
        </button>
        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 absolute md:static top-16 left-1/2 transform md:translate-x-0 -translate-x-1/2 md:bg-transparent ${
            isMenuOpen ? "bg-[#0a0d16]" : "bg-initial"
          } md:w-auto w-auto md:py-0 py-4 px-6 rounded-lg shadow-lg md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="group">
            <Link
              href="/"
              className="relative inline-block text-white font-2xl px-4 py-2 rounded-md transition duration-300 hover:bg-[#1e2433] hover:text-[#5294ff]"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className="relative inline-block text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#1e2433] hover:text-[#5294ff]"
            >
              About
            </Link>
          </li>
          <li className="group">
            <Link
              href="/team"
              className="relative inline-block text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#1e2433] hover:text-[#5294ff]"
            >
              Our Team
            </Link>
          </li>
          <li className="group">
            <Link
              href="/sponsors"
              className="relative inline-block text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#1e2433] hover:text-[#5294ff]"
            >
              Our Sponsors
            </Link>
          </li>
          <li className="group">
            <Link
              href="/contact"
              className="relative inline-block text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#1e2433] hover:text-[#5294ff]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
