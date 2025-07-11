import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dummySpots from "../assets/dummySpots"; // Assuming this is your data source
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaStar,
  FaArrowLeft,
  FaPlayCircle,
  FaInfoCircle,
  FaImages,
  FaRegClock,
  FaLightbulb,
  FaRoute,
  FaComments,
  FaSpinner,
  FaExternalLinkAlt,
} from "react-icons/fa";

const SpotDetails = () => {
  const { id } = useParams();
  const spot = dummySpots.find((spot) => spot.id === id);
  const [activeImage, setActiveImage] = useState(spot?.image?.[0]);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [userLocation, setUserLocation] = useState(null);
  const [geolocationError, setGeolocationError] = useState(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const heroRef = useRef(null);

  // Parallax effect for the hero image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${-scrollY * 0.3}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter nearby attractions
  const nearbyAttractions = spot?.nearbyAttractionsIds
    ? dummySpots.filter((s) => spot.nearbyAttractionsIds.includes(s.id))
    : [];

  // Handle case where spot is not found
  if (!spot) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-4 py-20 font-sans text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-red-500 mb-6 tracking-wider"
        >
          ERROR 404
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 max-w-lg"
        >
          The tourist destination you are looking for does not exist or has been
          removed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/explore"
            className="inline-flex items-center px-8 py-4 bg-gray-900 border-2 border-lime-400 text-lime-400
                       font-bold text-lg rounded-none shadow-none hover:bg-lime-400 hover:text-black transition-all duration-200"
          >
            <FaArrowLeft className="mr-3 text-xl" /> RETURN
          </Link>
        </motion.div>
      </div>
    );
  }

  // Function to extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(spot.videoUrl);

  // Function to handle getting directions
  const handleGetDirections = () => {
    if (!spot.latitude || !spot.longitude) {
      setGeolocationError(
        "Destination coordinates are not available for this spot."
      );
      return;
    }

    setIsGettingLocation(true);
    setGeolocationError(null); // Clear previous errors

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          setUserLocation({ latitude: userLat, longitude: userLon });

          // Construct Google Maps URL
          const googleMapsUrl = `https://www.google.com/maps/dir/${userLat},${userLon}/${spot.latitude},${spot.longitude}`;
          window.open(googleMapsUrl, "_blank"); // Open in a new tab
          setIsGettingLocation(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setIsGettingLocation(false);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setGeolocationError(
                "Please allow location access to get directions from your current position."
              );
              break;
            case error.POSITION_UNAVAILABLE:
              setGeolocationError(
                "Location information is unavailable. Please try again later."
              );
              break;
            case error.TIMEOUT:
              setGeolocationError(
                "The request to get user location timed out."
              );
              break;
            default:
              setGeolocationError(
                "An unknown error occurred while getting your location."
              );
              break;
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000, // 10 seconds
          maximumAge: 0, // No cached position
        }
      );
    } else {
      setIsGettingLocation(false);
      setGeolocationError("Geolocation is not supported by your browser.");
    }
  };

  // Framer Motion variants for entrance animations
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.01, boxShadow: "0 0 15px rgba(163, 230, 53, 0.5)" }, // Lime glow
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white font-sans"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Parallax Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat flex items-end pb-16"
        style={{ backgroundImage: `url(${activeImage})` }}
      >
        {/* Stark Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full text-white"
          variants={itemVariants}
        >
          <h1 className=" sm:text-xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tighter uppercase drop-shadow-lg">
            {spot.name}
          </h1>
          <p className="text-xl sm:text-2xl flex items-center drop-shadow-md font-bold">
            <FaMapMarkerAlt className="mr-3 text-red-400 text-2xl" />{" "}
            {spot.location}
            <FaStar className="ml-4 mr-2 text-yellow-400 text-2xl" />{" "}
            {spot.rating} / 5
          </p>
          {/* Floating Back Button */}
          
        </motion.div>
      </div>

      {/* Main Content Area - "Pulls Up" Effect */}
      <div className="relative z-20 -mt-16 bg-gray-900 rounded-none shadow-none pt-8 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-lime-400">
        {/* Tabs Navigation (Centered) */}
        <div className="flex justify-center border-b-2 border-gray-700 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-shrink-0 py-3 px-6 text-lg font-bold transition-colors duration-200 flex items-center whitespace-nowrap border-b-4 ${
              activeTab === "overview"
                ? "text-lime-400 border-lime-400"
                : "text-gray-400 hover:text-lime-400 border-transparent"
            }`}
          >
            <FaInfoCircle className="mr-2" /> OVERVIEW
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex-shrink-0 py-3 px-6 text-lg font-bold transition-colors duration-200 flex items-center whitespace-nowrap border-b-4 ${
              activeTab === "gallery"
                ? "text-lime-400 border-lime-400"
                : "text-gray-400 hover:text-lime-400 border-transparent"
            }`}
          >
            <FaImages className="mr-2" /> GALLERY
          </button>
          {nearbyAttractions.length > 0 && (
            <button
              onClick={() => setActiveTab("nearby")}
              className={`flex-shrink-0 py-3 px-6 text-lg font-bold transition-colors duration-200 flex items-center whitespace-nowrap border-b-4 ${
                activeTab === "nearby"
                  ? "text-lime-400 border-lime-400"
                  : "text-gray-400 hover:text-lime-400 border-transparent"
              }`}
            >
              <FaRoute className="mr-2" /> NEARBY
            </button>
          )}
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex-shrink-0 py-3 px-6 text-lg font-bold transition-colors duration-200 flex items-center whitespace-nowrap border-b-4 ${
              activeTab === "reviews"
                ? "text-lime-400 border-lime-400"
                : "text-gray-400 hover:text-lime-400 border-transparent"
            }`}
          >
            <FaComments className="mr-2" /> REVIEWS
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          className="tab-content"
        >
          {activeTab === "overview" && (
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-left uppercase">
                ABOUT {spot.name}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-left">
                {spot.description}
              </p>

              {/* History Section */}
              {spot.history && (
                <motion.div
                  className="bg-gray-800 p-6 rounded-none border-2 border-gray-700 text-left"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3 className="text-2xl font-bold text-lime-400 mb-3 flex items-center uppercase">
                    <FaRegClock className="mr-3 text-2xl" /> HISTORY
                  </h3>
                  <p className="text-md text-gray-300 leading-relaxed whitespace-pre-line">
                    {spot.history}
                  </p>
                </motion.div>
              )}

              {/* Best Time to Visit Section */}
              {spot.bestTime && (
                <motion.div
                  className="bg-gray-800 p-6 rounded-none border-2 border-gray-700 text-left"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3 className="text-2xl font-bold text-lime-400 mb-3 flex items-center uppercase">
                    <FaRegClock className="mr-3 text-2xl" /> BEST TIME TO VISIT
                  </h3>
                  <p className="text-md text-gray-300 leading-relaxed whitespace-pre-line">
                    {spot.bestTime}
                  </p>
                </motion.div>
              )}

              {/* Local Tips Section */}
              {spot.localTips && (
                <motion.div
                  className="bg-gray-800 p-6 rounded-none border-2 border-gray-700 text-left"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3 className="text-2xl font-bold text-lime-400 mb-3 flex items-center uppercase">
                    <FaLightbulb className="mr-3 text-2xl" /> LOCAL TIPS
                  </h3>
                  <p className="text-md text-gray-300 leading-relaxed whitespace-pre-line">
                    {spot.localTips}
                  </p>
                </motion.div>
              )}

              {/* Action Button - Get Directions (Centered) */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleGetDirections}
                  disabled={
                    isGettingLocation || !spot.latitude || !spot.longitude
                  }
                  className={`inline-flex items-center px-8 py-4 rounded-none
                             bg-lime-500 text-black font-extrabold text-xl uppercase
                             shadow-none transition-all duration-200 transform
                             ${
                               isGettingLocation ||
                               (!spot.latitude && !spot.longitude)
                                 ? "opacity-60 cursor-not-allowed"
                                 : "hover:bg-lime-400 hover:scale-105"
                             }`}
                >
                  {isGettingLocation ? (
                    <>
                      <FaSpinner className="animate-spin mr-3 text-2xl" />{" "}
                      LOCATING...
                    </>
                  ) : (
                    <>
                      <FaMapMarkerAlt className="mr-3 text-2xl" /> GET ACCESS
                    </>
                  )}
                </button>
                {geolocationError && (
                  <p className="text-red-500 mt-4 text-sm font-bold">
                    {geolocationError}
                  </p>
                )}
                {(!spot.latitude || !spot.longitude) && (
                  <p className="text-yellow-400 mt-4 text-sm font-bold">
                    NOTE: COORDINATES UNAVAILABLE.
                  </p>
                )}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {spot.image.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${spot.name} gallery ${index}`}
                  className="w-full h-40 object-cover rounded-none border-2 border-gray-700 cursor-pointer"
                  onClick={() => {
                    setActiveImage(img);
                    setIsVideoActive(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(163, 230, 53, 0.5)", // Lime glow
                  }}
                />
              ))}
              {videoId && (
                <motion.div
                  onClick={() => {
                    setIsVideoActive(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative w-full h-40 rounded-none border-2 border-gray-700 cursor-pointer flex items-center justify-center bg-gray-800 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: spot.image.length * 0.05,
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(163, 230, 53, 0.5)", // Lime glow
                  }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} // Corrected YouTube thumbnail URL
                    alt="Video thumbnail"
                    className="h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-lime-400 text-4xl rounded-none">
                    <FaPlayCircle />
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === "nearby" && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-left uppercase">
                NEARBY ATTRACTIONS
              </h2>
              {nearbyAttractions.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nearbyAttractions.map((nearbySpot, index) => (
                    <motion.div
                      key={nearbySpot.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 0 15px rgba(163, 230, 53, 0.5)", // Lime glow
                      }}
                      className="bg-gray-800 rounded-none shadow-none overflow-hidden border-2 border-gray-700"
                    >
                      <Link to={`/spot/${nearbySpot.id}`} className="block">
                        <img
                          src={nearbySpot.image[0]}
                          alt={nearbySpot.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-lime-400 mb-2 uppercase">
                            {nearbySpot.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-2 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-red-400" />
                            {nearbySpot.location}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center">
                            <FaStar className="mr-2 text-yellow-400" />
                            {nearbySpot.rating} / 5
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-lg text-gray-500 py-10">
                  NO NEARBY ATTRACTIONS LISTED.
                </p>
              )}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-center py-10 bg-gray-800 rounded-none border-2 border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 uppercase">
                YOUR FEEDBACK
              </h2>
              <p className="mb-4 text-lg text-gray-300">
                BE THE FIRST TO SHARE YOUR EXPERIENCE WITH {spot.name}!
              </p>
              <p className="text-md mb-6 text-gray-400">
                (THIS IS A PLACEHOLDER FOR A FUTURE REVIEWS FEATURE.)
              </p>
              <button className="inline-flex items-center px-6 py-3 rounded-none bg-lime-500 text-black font-bold uppercase shadow-none hover:bg-lime-400 transition-colors duration-200">
                <FaComments className="mr-2" /> SUBMIT REVIEW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpotDetails;