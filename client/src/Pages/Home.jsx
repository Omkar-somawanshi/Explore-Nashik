import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaWineGlassAlt, FaMountain, FaHistory, FaOm, FaUtensils, FaStar, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import nashikHomeBg from '../assets/photos/new.jpg';
import { motion } from "framer-motion";
import { Howl } from 'howler';

import ambientSound from '../assets/audio/history-historical.mp3';

const Home = () => {
  // CORRECTED: Start `isMuted` as TRUE.
  // This tells Howler.js to start the audio stream immediately, but silently.
  const [isMuted, setIsMuted] = useState(true);
  const soundRef = useRef(null);

  // Initialize and control the ambient sound
  useEffect(() => {
    if (!soundRef.current) { // Ensure Howl instance is created only once
      soundRef.current = new Howl({
        src: [ambientSound],
        loop: true,
        volume: 0.3,
        autoplay: true, // This will attempt to autoplay
        preload: true,
        mute: true, // CORRECTED: MOST IMPORTANT - Tells Howl to start muted
        onplayerror: (id, error) => {
          // This typically means the browser blocked autoplay with sound.
          // The sound will still be *playing silently* and will become audible on first user interaction.
          console.error("Howler.js playback error:", error);
        }
      });
    }

    // This function ensures React's `isMuted` state always matches Howl's internal mute state.
    // This is crucial if browser unmuting happens or when `toggleMute` is called.
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
        soundRef.current.off('play', updateMuteState); // Clean up listeners
        soundRef.current.off('mute', updateMuteState);
        soundRef.current.stop();
        soundRef.current.unload();
        soundRef.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Toggle mute state and control Howl instance
  const toggleMute = () => {
    if (soundRef.current) {
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

  // Data for the key highlights/benefits section
  const benefits = [
    { icon: FaOm, text: "Spiritual Hub" },
    { icon: FaWineGlassAlt, text: "Wine Capital" },
    { icon: FaMountain, text: "Scenic Beauty" },
    { icon: FaHistory, text: "Rich Heritage" },
  ];

  // Data for Quick Links to Popular Categories (this section was commented out in your provided code)
  const popularCategories = [
    { name: "Temples", icon: FaOm, route: "/explore?category=Religious" },
    { name: "Vineyards", icon: FaWineGlassAlt, route: "/explore?category=Nature" },
    { name: "Foodie Trails", icon: FaUtensils, route: "/explore?category=Food & Drink" },
    { name: "Top Rated", icon: FaStar, route: "/explore?sort=rating" },
  ];

  return (
    <section
      className="relative h-screen w-full bg-cover bg-fixed bg-center flex items-center justify-center text-white overflow-hidden cursor-default" // CORRECTED: Changed cursor-none to cursor-default
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
        onClick={toggleMute} // Added onClick handler back
        className="absolute bottom-6 left-6 z-30 p-3 bg-white/10 rounded-full
                   text-white/80 hover:text-lime-300 backdrop-blur-sm
                   transition-colors duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} // Removed delay here for quick appearance
      >
        {isMuted ? <FaVolumeMute className="text-2xl" /> : <FaVolumeUp className="text-2xl" />}
      </motion.button>

      {/* Content Area - Framed and Centralized with Framer Motion animations */}
      <motion.div
        className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-4xl w-full
                   bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl
                   flex flex-col items-center text-center"
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

        {/* Cinematic Button with Framer Motion for hover and tap effects */}
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

        {/* Quick Links to Popular Categories - Uncomment this section if you want to use it */}
        {/*
        <motion.div
          className="mt-10 mb-8 w-full max-w-xl grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1.5,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {popularCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <Link
                to={cat.route}
                className="flex flex-col items-center p-3 sm:p-4 bg-white/10 rounded-lg shadow-inner
                           border border-white/5 text-white/90 hover:text-lime-300 transition-colors duration-300"
              >
                <cat.icon className="text-3xl sm:text-4xl text-lime-300 mb-2 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
                <p className="text-xs sm:text-sm font-semibold">{cat.name}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        */}

        {/* Key Highlights/Benefits Section */}
        <motion.div
          className="mt-6 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90"
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
    </section>
  );
};

export default Home;