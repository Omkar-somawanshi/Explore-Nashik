import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaWineGlassAlt,
  FaMountain,
  FaHistory,
  FaOm,
  FaUtensils,
  FaStar,
  FaVolumeUp,
  FaVolumeMute,
  FaMapMarkedAlt, // Added for "Explore" section
} from "react-icons/fa";
import nashikHomeBg from '../assets/photos/new.jpg'; // Ensure this path is correct
import { motion } from "framer-motion";
import { Howl } from 'howler';

import ambientSound from '../assets/audio/history-historical.mp3'; // Ensure this path is correct

// Import images for the new sections (you'll need to add these to your assets/photos folder)
import wineExperienceImg from '../assets/photos/wine.jpg'; // Placeholder, replace with actual image
import culinaryJourneyImg from '../assets/photos/nsk.jpg'; // Placeholder, replace with actual image
import exploreNashikImg from '../assets/photos/nsk.jpg'; // Placeholder, replace with actual image

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const soundRef = useRef(null);
  const userInteracted = useRef(false); // To track if a user has interacted

  // Initialize and control the ambient sound
  useEffect(() => {
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [ambientSound],
        loop: true,
        volume: 0.3,
        autoplay: true,
        preload: true,
        mute: true, // Start muted
        onplayerror: (id, error) => {
          console.error("Howler.js playback error:", error);
          // If autoplay failed, and no user interaction yet, keep muted state as is.
          // The browser will typically unmute on the first user interaction (like clicking the mute button).
        }
      });
    }

    // Function to update React's `isMuted` state based on Howl's internal state
    const updateMuteState = () => {
      if (soundRef.current) {
        setIsMuted(soundRef.current.mute());
      }
    };

    // Add event listeners to keep `isMuted` state in sync with Howl's actual playback status
    if (soundRef.current) {
      soundRef.current.on('play', updateMuteState);
      soundRef.current.on('mute', updateMuteState); // Listen for explicit mute/unmute calls
    }

    // Clean up sound on component unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.off('play', updateMuteState);
        soundRef.current.off('mute', updateMuteState);
        soundRef.current.stop();
        soundRef.current.unload();
        soundRef.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Toggle mute state and control Howl instance
  const toggleMute = () => {
    userInteracted.current = true; // User has interacted, now we can play sound reliably
    if (soundRef.current) {
      // If sound is loaded but not playing (e.g., autoplay blocked initially), play it first
      if (!soundRef.current.playing()) {
        soundRef.current.play();
      }
      const currentlyMuted = soundRef.current.mute(); // Get Howl's current mute state
      soundRef.current.mute(!currentlyMuted); // Toggle Howl's mute state
      setIsMuted(!currentlyMuted); // Update React state to reflect Howl's state
    }
  };

  // Define animation variants for the container and its children
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  // Define variants for individual text elements and the button
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

  const sectionHeaderVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" },
    tap: { scale: 0.98 },
  };

  // Data for the key highlights/benefits section
  const benefits = [
    { icon: FaOm, text: "Spiritual Hub" },
    { icon: FaWineGlassAlt, text: "Wine Capital" },
    { icon: FaMountain, text: "Scenic Beauty" },
    { icon: FaHistory, text: "Rich Heritage" },
  ];

  // Data for the "What You'll Discover" section linking to main pages
  const discoverSections = [
    {
      title: "Wine Experiences",
      description: "Explore Nashik's renowned vineyards and indulge in world-class wine tasting tours.",
      icon: FaWineGlassAlt,
      route: "/wine-experience",
      image: wineExperienceImg, // Placeholder
    },
    {
      title: "Culinary Journey",
      description: "Savor the authentic flavors of Nashik, from spicy street food to traditional Maharashtrian thalis.",
      icon: FaUtensils,
      route: "/culinary-journey",
      image: culinaryJourneyImg, // Placeholder
    },
    {
      title: "Explore Nashik",
      description: "Uncover historical sites, serene temples, and breathtaking natural landscapes.",
      icon: FaMapMarkedAlt,
      route: "/explore",
      image: exploreNashikImg, // Placeholder
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${nashikHomeBg})`,
      }}
    >
      {/* Dark Cinematic Overlay with top gradient and subtle pulse */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-0 animate-background-pulse"></div>

      {/* Subtle Radial Gradient "Spotlight" (behind content) */}
      <div className={`absolute inset-0 flex items-center justify-center z-0 pointer-events-none ${!isMuted ? 'animate-pulse-subtle-audio' : 'animate-pulse-subtle'}`}>
        <div className="w-2/3 h-2/3 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Mute/Unmute Button */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-6 left-6 z-30 p-3 bg-white/10 rounded-full
                   text-white/80 hover:text-lime-300 backdrop-blur-sm
                   transition-colors duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
        aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
      >
        {isMuted ? <FaVolumeMute className="text-2xl" /> : <FaVolumeUp className="text-2xl" />}
      </motion.button>

      {/* Main Content Area */}
      <motion.div
        className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-4xl w-full 
                   bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl
                   flex flex-col items-center text-center mt-20 mb-10 md:mt-30 md:mb-0" // Adjust margins for better spacing
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight drop-shadow-xl text-shadow-glow"
          variants={itemVariants}
        >
          Experience Nashik
          <motion.span
            className="block text-2xl sm:text-4xl font-semibold mt-2 text-lime-300"
            variants={itemVariants}
          >
            A Journey Through Time & Taste
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md"
          variants={itemVariants}
        >
          Unveil ancient secrets, indulge in world-class wines, and discover the serene beauty
          of Maharashtra's cultural heart.
        </motion.p>

        {/* Cinematic Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/explore"
            className="inline-flex items-center px-8 py-4 rounded-full
                       bg-gradient-to-r from-lime-500 to-green-600 text-black
                       font-bold text-xl uppercase tracking-wider
                       shadow-lg hover:shadow-xl transition-shadow duration-300
                       group"
            as={motion.a}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0, 255, 0, 0.4)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaPlayCircle className="mr-3 text-3xl transition-transform duration-300 group-hover:scale-110" />
            Start Your Discovery
          </Link>
        </motion.div>

        {/* Key Highlights/Benefits Section */}
        <motion.div
          className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1.8,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-white/10 rounded-lg shadow-md border border-white/5"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <benefit.icon className="text-4xl text-lime-300 mb-2 drop-shadow-lg" />
              <p className="text-sm font-semibold">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* NEW: "What You'll Discover" Section - outside the main framed div but still centered */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto p-6 sm:p-10 lg:p-16 mt-12 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, hidden: { opacity: 0 } }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-white text-center mb-10 drop-shadow-lg"
          variants={sectionHeaderVariants}
        >
          What You'll Discover
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discoverSections.map((section, index) => (
            <Link to={section.route} key={index}>
              <motion.div
                className="relative bg-gray-800/60 rounded-xl overflow-hidden shadow-xl border border-gray-700
                           group cursor-pointer flex flex-col h-full"
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <section.icon className="text-6xl text-lime-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {section.description}
                    </p>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;