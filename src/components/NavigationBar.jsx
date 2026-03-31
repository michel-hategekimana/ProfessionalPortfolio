

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="fixed top-0 left-0 w-full z-50 flex justify-between px-6 md:px-12 h-16 items-center bg-white/80 backdrop-blur-md border-b border-gray-300">

      
      {/* LOGO */}
      <Link to="/">
        <h1 className="text-blue-600 text-2xl font-semibold">
          Michel H
        </h1>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-lg">
        <li className="hover:text-blue-600"><Link to="/about">About</Link></li>
        <li className="hover:text-blue-600"><Link to="/experience">Experience</Link></li>
        <li className="hover:text-blue-600"><Link to="/project">Projects</Link></li>
        <li className="hover:text-blue-600"><Link to="/contact">Contact</Link></li>
      </ul>

      {/* DESKTOP BUTTON */}
      <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-xl">
        Hire me
      </button>

      {/* MOBILE ICON */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 text-lg">
            <li onClick={() => setIsOpen(false)}><Link to="/about">About</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/experience">Experience</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/project">Projects</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/contact">Contact</Link></li>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">
              Hire me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;