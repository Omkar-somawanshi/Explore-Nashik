import React, { useState } from "react"; // Import useState
import dummySpots from "../assets/dummySpots";
import SpotCard from "../Components/SpotCard";
import nashikBackground from "../assets/photos/new.jpg";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa"; // Import new icons

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from dummySpots
  const categories = ["All", ...new Set(dummySpots.map((spot) => spot.category))];

  // Filter spots based on search term and selected category
  const filteredSpots = dummySpots.filter((spot) => {
    const matchesSearchTerm =
      spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spot.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spot.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || spot.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  // Variants for the main container (holding title, subtitle, and card grid)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for the title and subtitle (immediate children of the main container)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for individual SpotCards, to be animated as they scroll into view
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed bg-center px-4 pt-24 pb-10 flex items-center justify-center"
      style={{
        backgroundImage: `url(${nashikBackground})`,
      }}
    >
      {/* Softer Overlay for Glassmorphism */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      {/* Foreground content - wrapped with motion.div for entrance animation */}
      <motion.div
        className="relative z-10 p-4 sm:p-8 max-w-6xl w-full bg-white/5 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="
            text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center
            drop-shadow-md
            relative pb-4
          "
          variants={itemVariants}
        >
          Explore Nashik's Hidden Gems
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-lime-400 rounded-full"></span>{" "}
          {/* Stylish underline */}
        </motion.h2>

        <motion.p
          className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Uncover the beauty, history, and vibrant culture of the city.
        </motion.p>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          {/* Search Bar */}
          <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Search by name, location, or description..."
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70
                         focus:outline-none focus:ring-2 focus:ring-lime-400 border border-white/10
                         transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
            <select
              className="w-full pl-4 pr-10 py-3 rounded-full bg-white/20 text-white appearance-none cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-lime-400 border border-white/10
                         transition-all duration-300"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-gray-800 text-white" // Style options for dark background
                >
                  {category}
                </option>
              ))}
            </select>
            <FaFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" />
          </div>

          {/* Clear Filters Button (Optional, if multiple filters were applied) */}
          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-5 py-3 rounded-full bg-red-600 text-white font-semibold
                         hover:bg-red-700 transition-colors duration-300 flex items-center"
            >
              <FaTimes className="mr-2" /> Clear Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredSpots.length > 0 ? (
            filteredSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <SpotCard spot={spot} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center text-white/80 text-2xl py-10"
            >
              No spots found matching your criteria. Try adjusting your search or filters!
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;