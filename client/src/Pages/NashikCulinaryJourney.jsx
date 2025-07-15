import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaPepperHot,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaStar,
  FaStore,
  FaCookieBite,
  FaDrumstickBite,
} from "react-icons/fa";

// Sample Data for Culinary Sections
const foodExperiences = [
  {
    id: "1",
    type: "Street Food Delights",
    title: "The Spicy & Savory Street Scene",
    description:
      "Nashik's streets come alive with flavors. Dive into local favorites that are a must-try for every food lover.",
    icon: FaPepperHot,
    items: [
      {
        name: "Vada Pav",
        details:
          "The quintessential Maharashtrian burger – a spicy potato fritter (vada) nestled in a soft bun (pav) with chutneys.",
        image:
          "https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png",
        bestPlaces: ["Local stalls near Old Market", "Chitale Bandhu"],
      },
      {
        name: "Misal Pav",
        details:
          "Nashik's signature dish! A spicy curry (misal) made from sprouted lentils, topped with farsan (crispy snacks), onions, and coriander, served with pav.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Kolhapuri_Misal_Pav.jpg",
        bestPlaces: ["Ambica Misal", "Tardev Misal", "Hotel Sudarshan"],
      },
      {
        name: "Dabeli",
        details:
          "A sweet and spicy potato filling stuffed in a pav, garnished with pomegranate, roasted peanuts, and sev.",
        image:
          "https://cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg",
        bestPlaces: ["Various street vendors"],
      },
    ],
  },
  {
    id: "2",
    type: "Traditional Maharashtrian Cuisine",
    title: "Authentic Local Flavors",
    description:
      "Explore the heart of Maharashtrian cooking with dishes that define the region's culinary identity.",
    icon: FaUtensils,
    items: [
      {
        name: "Pithla Bhakri",
        details:
          "A rustic and wholesome dish where chickpea flour curry (pithla) is served with jowar or bajra flatbread (bhakri).",
        image:
          "https://vanitascorner.com/wp-content/uploads/2021/03/Pithla-bhakri_FB.jpg",
        bestPlaces: ["Local Thali restaurants"],
      },
      {
        name: "Bharli Vangi",
        details:
          "Stuffed brinjal curry, a flavorful dish where small eggplants are filled with a spicy peanut and coconut masala.",
        image:
          "https://www.ohmyveg.co.uk/wp-content/uploads/2021/02/Bharli-Vangi-1-scaled-e1722868214109.jpg",
        bestPlaces: ["Authentic Maharashtrian restaurants"],
      },
    ],
  },
  {
    id: "3",
    type: "Sweet Treats & Snacks",
    title: "Indulge Your Sweet Tooth",
    description:
      "No meal is complete without Nashik's delightful sweets and popular snacks.",
    icon: FaCookieBite,
    items: [
      {
        name: "Basundi",
        details:
          "A rich, sweet, and condensed milk dessert, flavored with cardamom and nuts.",
        image:
          "https://prashantcorner.com/cdn/shop/files/KesarBasundiSR-3.jpg?v=1718082478",
        bestPlaces: ["Sweet shops across the city"],
      },
      {
        name: "Chivda",
        details:
          "A popular savory snack mix made from flattened rice, nuts, and spices.",
        image:
          "https://madhurasrecipe.com/wp-content/uploads/2020/10/Nashik-Chivda-Marathi-Recipe-585x366.jpg",
        bestPlaces: ["Local snack stores"],
      },
    ],
  },
];

const recommendedRestaurants = [
  {
    name: "Shree Rajbhog Thali",
    specialty:
      "Best thali restaurant in Nashik, Best food in Nashik, Veg thali in Nashik",
    rating: 4.2,
    address: "Near Mumbai Naka",
    latitude: 19.981959,
    longitude: 73.776662,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPhU-qvHHF5OFEFaQsrAHk6Ug2HVmMmXoeA&s",
  },
  {
    name: "Divtya Budlya Wada",
    specialty: "Authentic Misal Pav & Snacks",
    rating: 4.5,
    address: "Sinnar Phata",
    latitude: 20.012481,
    longitude: 73.746627,
    image: "https://via.placeholder.com/400x300?text=Divtya+Budlya+Wada",
  },
  {
    name: "Sagar Sweets",
    specialty: "Local Sweets & Snacks",
    rating: 4.0,
    address: "Various locations",
    latitude: 19.990374,
    longitude: 73.782769,
    image: "https://via.placeholder.com/400x300?text=Sagar+Sweets",
  },
];

const NashikCulinaryJourney = () => {
  const navigate = useNavigate();

  // Framer Motion variants for animations
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
      },
    },
    hover: {
      scale: 1.005,
      transition: {
        duration: 0.5,
      },
    }
  };

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    }
  };

  const iconSpin = {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950/80 to-gray-900/80 backdrop-blur-lg text-white font-sans p-4 sm:p-8 pt-24">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-4 sm:left-8 z-20 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center transition-colors shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>

      <motion.div
        className="max-w-7xl mx-auto py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={{ scale: 0.995 }}
      >
        {/* Header Section */}
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg relative pb-6"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.span
              animate={iconSpin}
              className="text-orange-500 text-5xl sm:text-6xl mr-4"
            >
              <FaDrumstickBite />
            </motion.span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Nashik's Culinary Canvas
            </span>
          </div>
          <motion.span
            className="block text-xl sm:text-2xl font-semibold text-white/80 mt-2"
            variants={itemVariants}
          >
            A Journey of Flavors, Spices & Sweet Delights
          </motion.span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-orange-400 to-red-600 rounded-full"></span>
        </motion.h1>

        <motion.p
          className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Embark on a delightful gastronomic adventure through the heart of
          Nashik. From fiery street food to traditional Maharashtrian thalis,
          your taste buds are in for a treat!
        </motion.p>

        {/* Introduction to Nashik's Food Scene */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-4 flex items-center">
            <FaUtensils className="mr-3 text-2xl" /> A Taste of Tradition & Spice
          </h2>
          <p className="text-gray-300 mb-4">
            Nashik's cuisine is a vibrant reflection of its culture, heavily
            influenced by traditional Maharashtrian flavors. Expect a delightful
            balance of spicy, savory, and sometimes sweet notes, often featuring
            local produce and traditional cooking methods.
          </p>
          <p className="text-gray-300">
            While it's famous for its grapes and wine, Nashik holds its own as a
            food destination, offering everything from quick bites on bustling
            streets to hearty traditional meals.
          </p>
        </motion.section>

        {/* Food Experience Sections */}
        {foodExperiences.map((experience) => (
          <motion.section
            key={experience.id}
            className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-orange-400 mb-6 flex items-center">
              <experience.icon className="mr-3 text-2xl" /> {experience.title}
            </h2>
            <p className="text-gray-300 mb-6">{experience.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experience.items.map((item) => (
                <motion.div
                  key={item.name}
                  className="bg-gray-700/50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 flex-grow">
                      {item.details}
                    </p>
                    {item.bestPlaces && (
                      <div className="mt-auto">
                        <p className="text-orange-300 text-xs font-semibold flex items-center">
                          <FaStore className="mr-1" /> Find it at:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 text-xs mt-1">
                          {item.bestPlaces.map((place, idx) => (
                            <li key={idx}>{place}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Recommended Restaurants Section */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-6 flex items-center">
            <FaStar className="mr-3 text-2xl" /> Top Places to Dine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedRestaurants.map((restaurant) => (
              <motion.div
                key={restaurant.name}
                className="bg-gray-700/50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-orange-300 text-sm mb-2">
                    {restaurant.specialty}
                  </p>
                  <div className="flex items-center text-gray-300 text-sm mb-3">
                    <FaStar className="text-yellow-400 mr-1" />{" "}
                    {restaurant.rating}
                    <span className="ml-2 flex items-center">
                      <FaMapMarkerAlt className="mr-1" /> {restaurant.address}
                    </span>
                  </div>
                  {restaurant.latitude && restaurant.longitude ? (
                    <a
                      href={`https://maps.google.com/?q=${restaurant.latitude},${restaurant.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full text-sm font-semibold transition-colors flex items-center justify-center"
                    >
                      <FaMapMarkerAlt className="mr-2" /> View on Map
                    </a>
                  ) : (
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        restaurant.name + ", Nashik"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full text-sm font-semibold transition-colors flex items-center justify-center"
                    >
                      <FaMapMarkerAlt className="mr-2" /> Search on Map
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Culinary Tips Section */}
        <motion.section/
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-4 flex items-center">
            <FaInfoCircle className="mr-3 text-2xl" /> Culinary Tips
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Spice Level:</strong> Maharashtrian food can be spicy. If you prefer
              milder flavors, ask for less chili.
            </li>
            <li>
              <strong>Hygiene:</strong> When trying street food, look for popular stalls with
              a high turnover of customers.
            </li>
            <li>
              <strong>Breakfast:</strong> Misal Pav is primarily a breakfast dish, though
              available all day.
            </li>
            <li>
              <strong>Timing:</strong> Many street food vendors start in the late afternoon
              and evening.
            </li>
            <li>
              <strong>Explore:</strong> Don't hesitate to ask locals for their favorite food
              spots!
            </li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default NashikCulinaryJourney;