import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaSearch, FaFilter, FaWineGlassAlt, FaLeaf, FaMicrophone, FaPaintBrush, FaUtensils, FaPray, FaChevronLeft, FaChevronRight, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

// --- Mock Data for Events (Replace with real data from an API or database later) ---
const mockEvents = [
  {
    id: 'e1',
    name: 'Sula Fest 2025',
    date: '2025-02-07', // YYYY-MM-DD format for easy sorting
    time: '12:00 PM - 10:00 PM',
    location: 'Sula Vineyards',
    description: 'India\'s gourmet music festival! Enjoy live music, delicious food, and fine wines amidst the vineyards.',
    category: 'Wine & Food',
    image: 'https://assets.cntraveller.in/photos/63e15b67873b8890733d3c8c/16:9/w_1280,c_limit/Sula_Fest.jpeg',
    link: 'https://www.sulafest.com/', // External link for tickets/info
    month: 2, // Month number (1-12) for calendar filtering
  },
  {
    id: 'e2',
    name: 'Nashik Cultural Marathon',
    date: '2025-01-26',
    time: '6:00 AM onwards',
    location: 'Gangapur Road',
    description: 'A marathon promoting fitness and Nashik\'s rich cultural heritage. Various categories for all ages.',
    category: 'Cultural',
    image: 'https://media.licdn.com/dms/image/D4D12AQGg4W-sB0m7lQ/article-cover_image-shrink_720_1280/0/1684784948834?e=2147483647&v=beta&t=o1n4wz_K28rD7R_iM9B4z0zT-F-P_Qp0v6M',
    link: '#',
    month: 1,
  },
  {
    id: 'e3',
    name: 'Grape Harvest Festival',
    date: '2025-03-15',
    time: '10:00 AM - 5:00 PM',
    location: 'Various Wineries (Check local listings)',
    description: 'Participate in grape stomping, vineyard tours, and enjoy fresh grape produce. A festive experience for families.',
    category: 'Wine & Food',
    image: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2016/01/29/Photos/grapes-kR0G--621x414@LiveMint.jpg',
    link: '#',
    month: 3,
  },
  {
    id: 'e4',
    name: 'Kumbh Mela (Next Major)',
    date: '2027-08-01', // Example for future major event
    time: 'All Day',
    location: 'Trimbakeshwar & Nashik City',
    description: 'The largest peaceful gathering in the world, held every 12 years. A profound spiritual experience.',
    category: 'Religious',
    image: 'https://www.india.com/wp-content/uploads/2021/04/kumbh-mela-shahi-snan.jpg',
    link: 'https://en.wikipedia.org/wiki/Kumbh_Mela',
    month: 8,
  },
  {
    id: 'e5',
    name: 'Nashik Art Fair',
    date: '2025-04-20',
    time: '11:00 AM - 7:00 PM',
    location: 'Panchavati Exhibition Centre',
    description: 'Showcasing local artists, sculptures, and various art forms. Workshops and live demonstrations available.',
    category: 'Arts & Culture',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0B9l_l_W-4uK-P-jD0_y-zXf0u-G_s-Xlkg&s',
    link: '#',
    month: 4,
  },
  {
    id: 'e6',
    name: 'Local Food Festival',
    date: '2025-05-10',
    time: '12:00 PM - 9:00 PM',
    location: 'College Road Grounds',
    description: 'A celebration of Nashik\'s street food and regional delicacies. Taste misal, vada pav, and more!',
    category: 'Food & Dining',
    image: 'https://static.toiimg.com/thumb/msid-62325325,imgsize-200389,width-400,resizemode-4/62325325.jpg',
    link: '#',
    month: 5,
  },
  {
    id: 'e7',
    name: 'Monsoon Trek to Harihar Fort',
    date: '2025-07-28',
    time: '7:00 AM - 4:00 PM',
    location: 'Harihar Fort Base',
    description: 'Guided trek to the iconic Harihar Fort, known for its thrilling rock-cut steps and panoramic views.',
    category: 'Adventure',
    image: 'https://www.tripsaround.in/wp-content/uploads/2022/10/Harihar-Fort-Trek-Nashik-Maharashtra.jpg',
    link: '#',
    month: 7,
  },
  {
    id: 'e8',
    name: 'Nashik Music Mela',
    date: '2025-09-05',
    time: '6:00 PM onwards',
    location: 'Mahatma Gandhi Udyan',
    description: 'An evening of classical and contemporary music performances by local and regional artists.',
    category: 'Music & Arts',
    image: 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=Music+Event', // <-- FIXED: Replaced problematic URL
    link: '#',
    month: 9,
  },
];

const eventCategories = [
  { name: 'All', icon: FaCalendarAlt },
  { name: 'Wine & Food', icon: FaWineGlassAlt },
  { name: 'Cultural', icon: FaLeaf }, // Re-using FaLeaf for general culture
  { name: 'Music & Arts', icon: FaMicrophone },
  { name: 'Religious', icon: FaPray },
  { name: 'Adventure', icon: FaUtensils }, // Using Utensils for adventure as a placeholder
];

const EventsCalendar = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // 1-indexed month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const filteredEvents = mockEvents.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const eventDate = new Date(event.date);
    const matchesMonth = eventDate.getMonth() + 1 === currentMonth && eventDate.getFullYear() === currentYear;
    
    // Only show events that are not in the past relative to today, unless they are for a future year or the current year's selected future month
    const today = new Date();
    today.setHours(0,0,0,0); // Reset time for comparison

    const isFutureEvent = eventDate >= today;
    const isPastEventButFutureMonthSelected = (eventDate < today) && (eventDate.getMonth() + 1 > new Date().getMonth() + 1 || eventDate.getFullYear() > new Date().getFullYear());


    return matchesCategory && matchesSearch && (matchesMonth || (currentYear > new Date().getFullYear() && event.month === currentMonth));
  }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const goToPreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(prevYear => prevYear - 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(prevYear => prevYear + 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth + 1);
    }
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
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
      {/* Background overlay with a subtle pattern/image */}
      <div
        className="absolute inset-0 z-0 opacity-0 md:opacity-5" // Reduced opacity for subtlety
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')`, // Example subtle pattern
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

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
        className="max-w-7xl mx-auto py-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-md relative pb-4"
          variants={itemVariants}
        >
          Nashik Vibrance: Events & Festivals
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-purple-400 rounded-full"></span>
        </motion.h1>

        <motion.p
          className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Discover what's happening in Nashik! From cultural celebrations and music festivals to culinary events and spiritual gatherings, find your next unforgettable experience.
        </motion.p>

        {/* Filters and Search */}
        <motion.section
          className="bg-gray-800/60 p-6 rounded-xl shadow-xl border border-gray-700 mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {eventCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${selectedCategory === cat.name ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-700/70 hover:bg-gray-600/80 text-gray-300'}`}
              >
                <cat.icon className="mr-2" /> {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-auto md:min-w-[250px]">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700/70 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </motion.section>

        {/* Month Navigation */}
        <motion.div
          className="bg-gray-800/60 p-4 rounded-xl shadow-xl border border-gray-700 mb-8 flex items-center justify-between"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-full bg-purple-600/80 hover:bg-purple-700 text-white transition-colors"
            aria-label="Previous Month"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-2xl font-bold text-purple-300">
            {months[currentMonth - 1]} {currentYear}
          </h2>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full bg-purple-600/80 hover:bg-purple-700 text-white transition-colors"
            aria-label="Next Month"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Event Listings */}
        <motion.section
          className="min-h-[400px]" // Ensure minimum height for visual stability
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="bg-gray-700/50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                  variants={cardVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" }}
                >
                  <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
                    <p className="text-gray-300 text-sm mb-3 flex-grow">{event.description}</p>
                    <div className="text-gray-400 text-sm space-y-1 mb-4">
                      <p className="flex items-center"><FaCalendarAlt className="mr-2 text-purple-400" /> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="flex items-center"><FaClock className="mr-2 text-purple-400" /> {event.time}</p>
                      <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-purple-400" /> {event.location}</p>
                    </div>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-md font-semibold transition-colors shadow"
                      >
                        <FaInfoCircle className="mr-2" /> Learn More
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center text-gray-400 text-2xl py-20 bg-gray-800/60 rounded-xl border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>No events found for {months[currentMonth - 1]} {currentYear} with the selected filters.</p>
              <p className="text-lg mt-4">Try adjusting your filters or browsing other months!</p>
            </motion.div>
          )}
        </motion.section>

        {/* Call to Action: Submit an Event (Optional for now) */}
        <motion.div
          className="text-center mt-12 p-6 bg-gray-800/60 rounded-xl border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Have an Event in Nashik?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Help us keep our community informed! If you're organizing an event in Nashik, share the details with us.
          </p>
          <button
            onClick={() => alert('Event submission form coming soon!')} // Replace with actual form/link
            className="inline-flex items-center px-8 py-3 rounded-full
                       bg-gradient-to-r from-teal-500 to-cyan-600 text-white
                       font-bold text-lg uppercase tracking-wider
                       shadow-lg hover:shadow-xl transition-shadow duration-300
                       group"
          >
            <FaCalendarAlt className="mr-3 text-2xl transition-transform duration-300 group-hover:scale-110" />
            Submit Your Event
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default EventsCalendar;
