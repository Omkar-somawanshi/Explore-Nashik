import React from "react";
import dummySpots from "../assets/dummySpots";
import SpotCard from "../Components/SpotCard";
import nashikBackground from "../assets/photos/new.jpg";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Explore = () => {
  // Variants for the main container (holding title, subtitle, and card grid)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to original position and fully visible
      transition: {
        duration: 0.8, // Duration for the container itself
        ease: "easeOut",
        when: "beforeChildren", // Animate container before its direct children
        staggerChildren: 0.15, // Stagger delay between children within this container
      },
    },
  };

  // Variants for the title and subtitle (immediate children of the main container)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to original position and fully visible
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for individual SpotCards, to be animated as they scroll into view
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 }, // Start smaller, slightly below, and invisible
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Animate to original size, position, and fully visible
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
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" /> {/* Added backdrop-blur-sm here for glass effect */}

      {/* Foreground content - wrapped with motion.div for entrance animation */}
      <motion.div
        className="relative z-10 p-4 sm:p-8 max-w-6xl w-full bg-white/5 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-lg"
        variants={containerVariants} // Apply the container's animation variants
        initial="hidden"           // Start in the 'hidden' state
        animate="visible"          // Animate to the 'visible' state when component mounts
      >
        <motion.h2
          className="
            text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center
            drop-shadow-md
            relative pb-4
          "
          variants={itemVariants} // Apply item variants to the title
        >
          Explore Nashik's Hidden Gems
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-lime-400 rounded-full"></span> {/* Stylish underline */}
        </motion.h2>

        <motion.p
          className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants} // Apply item variants to the subtitle
        >
          Uncover the beauty, history, and vibrant culture of the city.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {dummySpots.map((spot, index) => (
            // Each SpotCard is wrapped in a motion.div to animate individually on scroll
            <motion.div
              key={spot.id}
              variants={cardVariants}
              initial="hidden"           // Each card starts hidden
              whileInView="visible"      // Animates to 'visible' state when it enters the viewport
              viewport={{ once: true, amount: 0.3 }} // Animation plays only once when 30% of the element is visible
              custom={index}             // Optional: Pass index for potential custom staggering (e.g., custom delays)
            >
              <SpotCard spot={spot} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;