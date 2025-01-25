"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/ourteam" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors">
          Kurukshetra
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`
            fixed md:static top-0 right-0 w-64 md:w-auto h-full md:h-auto
            bg-gray-900/95 md:bg-transparent
            backdrop-blur-lg md:backdrop-blur-none
            transform transition-transform duration-300 ease-in-out
            md:flex md:items-center md:space-x-6
            pt-20 md:pt-0 px-6 md:px-0
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0
            absolute md:relative
          `}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="mb-6 md:mb-0">
              <Link
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="
                  block md:inline-block 
                  text-gray-300 hover:text-cyan-400 
                  transition-colors duration-300 
                  relative group
                "
              >
                {link.name}
                <span
                  className="
                    absolute bottom-0 left-0 w-0 h-0.5 
                    bg-cyan-400 
                    group-hover:w-full 
                    transition-all duration-300
                  "
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;