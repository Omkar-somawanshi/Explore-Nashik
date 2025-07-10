import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import nashikHomeBg from '../assets/photos/new.jpg'; // Using your background image
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Home = () => {
  // Define animation variants for the container and its children
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: invisible, slightly below
    visible: {
      opacity: 1,
      y: 0, // Animate to visible, original position
      transition: {
        duration: 0.8, // Duration for the container itself
        ease: "easeOut",
        when: "beforeChildren", // Animate container before its children
        staggerChildren: 0.2, // Delay between each child's animation
        delayChildren: 0.5, // Delay before children start animating after container starts
      },
    },
  };

  // Define variants for individual text elements and the button
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Initial state for children: invisible, slightly below
    visible: {
      opacity: 1,
      y: 0, // Animate to visible, original position
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-fixed bg-center flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${nashikHomeBg})`,
      }}
    >
      {/* Dark Cinematic Overlay with top gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-0"></div>

      {/* Subtle Radial Gradient "Spotlight" (behind content) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {/* Keeping the CSS animation for a continuous background pulse, as it's not a singular entrance animation */}
        <div className="w-2/3 h-2/3 bg-white/5 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
      </div>

      {/* Content Area - Framed and Centralized with Framer Motion animations */}
      <motion.div
        className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-4xl w-full
                   bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl
                   flex flex-col items-center text-center"
        variants={containerVariants} // Apply container variants
        initial="hidden" // Start from hidden state
        animate="visible" // Animate to visible state on mount
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight drop-shadow-xl text-shadow-glow"
          variants={itemVariants} // Apply item variants
        >
          Experience Nashik
          <motion.span
            className="block text-2xl sm:text-4xl font-semibold mt-2 text-lime-300"
            variants={itemVariants} // Apply item variants to the span as well for a separate animation
          >
            A Journey Through Time & Taste
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md"
          variants={itemVariants} // Apply item variants
        >
          Unveil ancient secrets, indulge in world-class wines, and discover the serene beauty
          of Maharashtra's cultural heart.
        </motion.p>

        {/* Cinematic Button with Framer Motion for hover and tap effects */}
        <motion.div variants={itemVariants}> {/* Wrap Link in a motion.div to apply itemVariants */}
          <Link
            to="/explore"
            className="inline-flex items-center px-8 py-4 rounded-full
                       bg-gradient-to-r from-lime-500 to-green-600 text-black
                       font-bold text-xl uppercase tracking-wider
                       shadow-lg hover:shadow-xl transition-shadow duration-300
                       group" // Keep group for internal icon animation
            as={motion.a} // Use motion.a with Link for Framer Motion properties on the Link component itself
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0, 255, 0, 0.4)", // More pronounced, glowing shadow on hover
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }} // Satisfying press effect on click
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // Spring physics for button hover/tap
          >
            <FaPlayCircle className="mr-3 text-3xl transition-transform duration-300 group-hover:scale-110" />
            Start Your Discovery
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;