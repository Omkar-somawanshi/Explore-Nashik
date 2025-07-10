import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; // Importing a modern arrow icon from react-icons

const SpotCard = ({ spot }) => {
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (hovered && spot.image.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % spot.image.length);
      }, 1500); // Slightly slower image change for smoother feel
    } else {
      setCurrentImageIndex(0); // reset on mouse leave
    }

    return () => clearInterval(interval);
  }, [hovered, spot.image]);

  return (
    <div
      className={`
        relative group
        bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md
        shadow-xl rounded-2xl overflow-hidden
        border border-white/20
        transition-all duration-500 ease-in-out
        transform hover:scale-[1.02] hover:shadow-2xl-strong
        flex flex-col
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container with Overlay */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img
          src={spot.image[currentImageIndex]}
          alt={spot.name}
          className={`
            w-full h-full object-cover
            transition-transform duration-700 ease-in-out
            ${hovered ? 'scale-110' : 'scale-100'}
          `}
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-2xl font-bold drop-shadow-md">{spot.name}</h3>
          <p className="text-sm opacity-80 drop-shadow-sm">{spot.location}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow text-gray-800">
        <p className="text-base text-white leading-relaxed mb-4 flex-grow">
          {spot.description.slice(0, 120)}... {/* Slightly more description */}
        </p>
        <Link
          to={`/spot/${spot.id}`}
          className={`
            inline-flex items-center px-4 py-2 rounded-full
            bg-lime-600 text-white font-semibold text-sm
            transition-all duration-300 ease-in-out
            hover:bg-lime-500 hover:shadow-lg
            transform hover:-translate-y-0.5
          `}
        >
          View Details
          <FiArrowRight className="ml-2 text-lg" /> {/* Modern arrow icon */}
        </Link>
      </div>
    </div>
  );
};

export default SpotCard;