import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa"; // Example icon for branding

const Navbar = () => {
  const location = useLocation();

  // Custom class logic for active link styling
  const navLinkClass = (path) =>
    `relative text-lg font-medium transition-all duration-300 ease-in-out
     ${
       location.pathname === path
         ? "text-lime-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lime-600 after:rounded-full after:scale-x-100"
         : "text-gray-100 hover:text-lime-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lime-400 after:rounded-full after:scale-x-0 group-hover:after:scale-x-75 hover:after:scale-x-100" // Group-hover for subtle underline on menu hover
     }
     after:transition-transform after:duration-300 after:origin-left
    `;

  return (
    <nav className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 border-b border-white/20 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Brand/Logo */}
        <Link
          to="/"
          className="inline-flex items-center text-3xl font-extrabold text-white drop-shadow-sm"
        >
          <FaMapMarkerAlt className="text-lime-400 text-2xl mr-2" />
          Explore <span className="text-lime-300 ml-2">Nashik</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 group">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/explore" className={navLinkClass("/explore")}>
            Explore
          </Link>
          
          <Link to="/wine-experience" className={navLinkClass("/wine-experience")}>
            Wine Experience
          </Link>
          {/* LINK: For the Culinary Journey page */}
          <Link to="/culinary-journey" className={navLinkClass("/culinary-journey")}>
            Culinary Journey
          </Link>
          {/* NEW LINK: For the Events Calendar page */}
          <Link to="/events-calendar" className={navLinkClass("/events-calendar")}>
            Events Calendar
          </Link>
          {/* Add more links here if you have any other user-facing pages */}
        </div>

        {/* Mobile Menu Button (Hamburger) - placeholder, ensure it works with your mobile menu logic */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
