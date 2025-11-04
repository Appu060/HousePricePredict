import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#4b3429] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="HomeWise" className="w-20" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-7">
          <Link to="/predict" className="hover:text-[#b7d470]">Predict</Link>
          <Link to="/details" className="hover:text-[#b7d470]">Details</Link>
          <Link
            to="/signup"
            className="bg-[#b7d470] hover:bg-[#a1a861] text-[#4b3429] px-4 py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </Link>
           <Link to="/profile" className="hover:underline">Profile</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-7 px-2">
          <Link to="/predict" onClick={toggleMenu} className="hover:text-[#b7d470]">Predict</Link>
          <Link to="/details" onClick={toggleMenu} className="hover:text-[#b7d470]">Details</Link>
          <Link
            to="/signup"
            onClick={toggleMenu}
            className="bg-[#b7d470] hover:bg-[#a1a861] text-[#4b3429] px-4 py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
