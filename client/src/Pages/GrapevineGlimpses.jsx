import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaWineGlassAlt, FaLeaf, FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'; // Added relevant icons

// --- Sample Data for Featured Wineries (You'll expand this with real data) ---
const featuredWineries = [
  {
    id: 'sula',
    name: 'Sula Vineyards',
    description: 'Pioneers of wine-making in Nashik, offering extensive tours, tasting rooms, and a popular resort. Known for pioneering Indian varietals.',
    image: 'https://sulavineyards.com/images/source/source-banner-poster.jpg', // Replace with Sula image
    highlights: ['Wine Tours & Tastings', 'Luxury Stays', 'Gourmet Restaurants (e.g., Little Italy)', 'Amphitheatre events'],
    website: 'https://www.sulavineyards.com/',
    mapLink: 'https://maps.app.goo.gl/S5hGzWcQ7D6K8L5u7', // Sula Google Maps link
  },
  {
    id: 'york',
    name: 'York Winery & Tasting Room',
    description: 'Nestled on the banks of Godavari, offering picturesque views and a focus on producing quality wines with a personal touch. Famous for its Arros and Late Harvest Chenin Blanc.',
    image: 'https://i0.wp.com/thewinesleuth.co.uk/wp-content/uploads/2017/04/img_2427.jpg', // Replace with York image
    highlights: ['Scenic Riverside Views', 'Award-Winning Wines', 'Sunset Point Restaurant', 'Personalized Tastings'],
    website: 'https://yorkwinery.com/',
    mapLink: 'https://maps.app.goo.gl/Y1rNqB7T2j3K2Z5X9', // York Google Maps link
  },
  {
    id: 'groverzampa',
    name: 'Grover Zampa Vineyards',
    description: 'One of India\'s oldest and most respected wineries, known for its expertise in producing premium quality wines using traditional and modern techniques.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5gXSERAgeRwH8ICKFh488TqHT0oBvH1SvA&s', // Replace with Grover Zampa image
    highlights: ['Heritage Wine Tours', 'Classic Varietals', 'Spacious Tasting Halls', 'Vineyard Lunches'],
    website: 'https://www.groverzampa.in/',
    mapLink: 'https://maps.app.goo.gl/G6kC8VfX3y2P1Q1A6', // Grover Zampa Google Maps link
  },
];

const GrapevineGlimpses = () => {
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
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-md relative pb-4"
          variants={itemVariants}
        >
          Grapevine & Glimpses: A Nashik Winery & Harvest Experience
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-lime-400 rounded-full"></span>
        </motion.h1>

        <motion.p
          className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Uncork the magic of India's Wine Capital! Explore the picturesque vineyards, learn about the art of winemaking, and indulge in world-class tastings.
        </motion.p>

        {/* Section: Understanding Nashik's Terroir */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-4 flex items-center">
            <FaLeaf className="mr-3 text-2xl" /> Understanding Nashik's Terroir
          </h2>
          <p className="text-gray-300 mb-4">
            Nashik's unique geographical location, situated in the Western Ghats, offers a climate and soil composition remarkably suited for viticulture. The region's moderate temperatures, adequate rainfall, and well-drained volcanic soils create the perfect "terroir" for cultivating a wide range of grape varietals.
          </p>
          <p className="text-gray-300">
            From the crisp notes of Sauvignon Blanc to the robust character of Cabernet Sauvignon, Nashik's vineyards produce grapes that contribute to the distinctive flavors of Indian wines.
          </p>
        </motion.section>

        {/* Section: The Wine-Making Journey */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-4 flex items-center">
            <FaWineGlassAlt className="mr-3 text-2xl" /> The Wine-Making Journey
          </h2>
          <p className="text-gray-300 mb-6">
            Ever wondered how those delicious grapes transform into your favorite wine? Here's a glimpse into the fascinating process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="p-4 bg-gray-700/50 rounded-lg shadow-inner">
              <img src="https://sraml.com/wp-content/uploads/2022/07/grapes-553463-1-1024x683.jpg" alt="Grape Harvest" className="mx-auto mb-3 rounded-md" />
              <h3 className="text-xl font-semibold text-white mb-2">1. The Harvest</h3>
              <p className="text-gray-300 text-sm">Grapes are carefully hand-picked at optimal ripeness, usually in early mornings to retain freshness.</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div variants={itemVariants} className="p-4 bg-gray-700/50 rounded-lg shadow-inner">
              <img src="https://img.freepik.com/premium-photo/crushing-press-ripe-grapes-by-fit-boots_120485-11624.jpg" alt="Crushing" className="mx-auto mb-3 rounded-md" />
              <h3 className="text-xl font-semibold text-white mb-2">2. Crushing & Pressing</h3>
              <p className="text-gray-300 text-sm">Grapes are gently crushed to release juice, then pressed to separate the liquid from the skins and seeds.</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div variants={itemVariants} className="p-4 bg-gray-700/50 rounded-lg shadow-inner">
              <img src="https://www.ridgewine.com/wp-content/uploads/2020/04/wine-fermentation-1024x683.jpg" alt="Fermentation" className="mx-auto mb-3 rounded-md" />
              <h3 className="text-xl font-semibold text-white mb-2">3. Fermentation</h3>
              <p className="text-gray-300 text-sm">Yeast converts the sugars in the grape juice into alcohol and carbon dioxide, turning it into wine.</p>
            </motion.div>
            {/* Step 4 */}
            <motion.div variants={itemVariants} className="p-4 bg-gray-700/50 rounded-lg shadow-inner">
              <img src="https://mscwordpresscontent.s3.amazonaws.com/mwmag/wp-content/uploads/2017/11/Grappa1_MW1117-720x480.png" alt="Aging" className="mx-auto mb-3 rounded-md" />
              <h3 className="text-xl font-semibold text-white mb-2">4. Aging</h3>
              <p className="text-gray-300 text-sm">Wine is aged in tanks (stainless steel) or barrels (oak) to develop complexity and character.</p>
            </motion.div>
            {/* Step 5 */}
            <motion.div variants={itemVariants} className="p-4 bg-gray-700/50 rounded-lg shadow-inner">
              <img src="https://newdaywine.com/wp-content/uploads/2022/08/How-Many-Grapes-In-A-Bottle-Of-Wine.jpg" alt="Bottling" className="mx-auto mb-3 rounded-md" />
              <h3 className="text-xl font-semibold text-white mb-2">5. Bottling</h3>
              <p className="text-gray-300 text-sm">Finally, the finished wine is bottled, often after filtration and stabilization, ready for enjoyment.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section: Featured Wineries */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-6 flex items-center">
            <FaWineGlassAlt className="mr-3 text-2xl" /> Featured Wineries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWineries.map((winery) => (
              <motion.div
                key={winery.id}
                className="bg-gray-700/50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={winery.image} alt={winery.name} className="w-full h-52 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{winery.name}</h3>
                  <p className="text-gray-300 text-md mb-4 flex-grow">{winery.description}</p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                    {winery.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-3">
                    {winery.website && (
                      <a
                        href={winery.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded-full text-sm font-semibold transition-colors"
                      >
                        <FaInfoCircle className="mr-2" /> Visit Website
                      </a>
                    )}
                    {winery.mapLink && (
                      <a
                        href={winery.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full text-sm font-semibold transition-colors"
                      >
                        <FaMapMarkerAlt className="mr-2" /> View on Map
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section: Harvest Season Special */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-4 flex items-center">
            <FaCalendarAlt className="mr-3 text-2xl" /> Harvest Season Special (Jan - March)
          </h2>
          <p className="text-gray-300 mb-4">
            Visiting Nashik during the grape harvest season (typically January to March) offers a truly unique and vibrant experience. This is when the vineyards come alive with activity!
          </p>
          <p className="text-gray-300">
            Many wineries host special events, including **grape stomping sessions**, live music, and special harvest-themed menus. It's a fantastic time to witness the beginning of the winemaking process firsthand and immerse yourself in the festive atmosphere. Remember to book tours and experiences well in advance as this is a peak tourist period!
          </p>
        </motion.section>

        {/* Section: Plan Your Winery Visit */}
        <motion.section
          className="bg-gray-800/60 p-8 rounded-xl shadow-xl border border-gray-700 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-4 flex items-center">
            <FaInfoCircle className="mr-3 text-2xl" /> Plan Your Winery Visit
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>**Best Time:** November to March for pleasant weather; January to March for grape harvest and stomping.</li>
            <li>**Getting There:** Wineries are typically outside the main city. Renting a car with a driver or using local taxis (pre-booked) is recommended. Some tour operators offer dedicated wine tours.</li>
            <li>**Booking:** It's advisable to book winery tours and tastings, especially during weekends and peak season.</li>
            <li>**Designated Driver:** Always have a designated driver if you plan on participating in tastings.</li>
            <li>**Dress Code:** Casual and comfortable attire is generally suitable.</li>
          </ul>
        </motion.section>

      </motion.div>
    </div>
  );
};

export default GrapevineGlimpses;