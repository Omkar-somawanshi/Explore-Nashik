import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import AdminLayout from "../../Components/Admin/AdminLayout"; // Ensure this path is correct
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaMapMarkerAlt,
  FaStar,
  FaSpinner,
} from "react-icons/fa"; // Import necessary icons

// Define the API base URL using an environment variable
// Fallback to localhost for local development if the env var isn't set
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to fetch tourist spots from the backend
  const fetchSpots = async () => {
    setLoading(true); // Set loading to true before fetching data
    setError(null); // Clear any previous errors
    try {
      const token = localStorage.getItem("adminToken"); // Get admin token from localStorage
      if (!token) {
        setError("Authentication required. Please log in."); // Error if no token found
        setLoading(false);
        navigate("/admin/login"); // Redirect to login page
        return;
      }
      const { data } = await axios.get(
        `${API_BASE_URL}/api/admin/spots`, // Use environment variable here
        {
          headers: { Authorization: `Bearer ${token}` }, // Send token for authentication
        }
      );
      setSpots(data); // Update spots state with fetched data
    } catch (err) {
      console.error("Error fetching spots:", err);
      // More user-friendly error message based on error type
      if (err.response && err.response.status === 401) {
        setError("Session expired or unauthorized. Please log in again.");
        navigate("/admin/login"); // Redirect to login page on unauthorized
      } else {
        setError(
          "Failed to fetch spots. Please check your connection or try again later."
        );
      }
    } finally {
      setLoading(false); // Set loading to false after fetch attempt
    }
  };

  // Function to handle spot deletion
  const deleteSpot = async (id) => {
    // IMPORTANT: In a production app, replace window.confirm with a custom modal for better UX
    if (
      window.confirm(
        "Are you sure you want to delete this spot permanently? This action cannot be undone."
      )
    ) {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          setError("Authentication required. Please log in.");
          navigate("/admin/login");
          return;
        }
        await axios.delete(`${API_BASE_URL}/api/admin/spot/${id}`, { // Use environment variable here
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchSpots(); // Re-fetch the list of spots after successful deletion
      } catch (err) {
        console.error("Error deleting spot:", err);
        if (err.response && err.response.status === 401) {
          setError("Session expired or unauthorized. Please log in again.");
          navigate("/admin/login");
        } else {
          setError("Failed to delete spot. Please try again.");
        }
      }
    }
  };

  // Fetch spots when the component mounts
  useEffect(() => {
    fetchSpots();
  }, []); // The empty dependency array ensures this runs only once on mount

  // Skeleton Card component for loading state
  const SkeletonCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse flex flex-col">
      <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>{" "}
      {/* Image placeholder */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>{" "}
      {/* Title placeholder */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>{" "}
      {/* Location placeholder */}
      <div className="flex justify-between mt-auto">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>{" "}
        {/* Edit button placeholder */}
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>{" "}
        {/* Delete button placeholder */}
      </div>
    </div>
  );

  return (
    <AdminLayout> {/* Assuming AdminLayout wraps the content */}
      <div className="p-6 md:p-8 lg:p-10 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Dashboard Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 drop-shadow-md">
            Manage Tourist Spots
          </h1>
          <Link
            to="/admin/add"
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white
                          px-6 py-3 rounded-full shadow-lg hover:shadow-xl
                          transition duration-300 ease-in-out transform hover:-translate-y-1
                          flex items-center text-lg font-semibold"
          >
            <FaPlus className="mr-2" /> Add New Spot
          </Link>
        </div>

        {/* Error Message Display */}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {/* Conditional Rendering: Loading, Empty State, or Spots List */}
        {loading ? (
          // Display skeleton cards while loading
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}{" "}
            {/* Show 6 skeleton cards */}
          </div>
        ) : spots.length === 0 ? (
          // Display empty state message if no spots are found after loading
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              No tourist spots found yet.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              It looks like there are no spots to manage. Start by adding your
              first amazing destination!
            </p>
            <Link
              to="/admin/add"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FaPlus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Your First Spot
            </Link>
          </div>
        ) : (
          // Display the grid of spot cards
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.map((spot) => (
              <div
                key={spot._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl
                            transition-all duration-300 ease-in-out transform hover:-translate-y-1
                            flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Spot Image */}
                {spot.image && spot.image.length > 0 && (
                  <img
                    src={spot.image[0]} // Display the first image from the array
                    alt={spot.name}
                    className="w-full h-56 object-cover object-center rounded-t-lg"
                  />
                )}
                {/* Spot Details and Actions */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {spot.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-purple-500" />
                    {spot.location}
                  </p>
                  {/* Display rating only if it exists */}
                  {spot.rating && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                      <FaStar className="mr-2 text-yellow-500" />
                      {spot.rating} / 5
                    </p>
                  )}
                  {/* Action Buttons: Edit and Delete */}
                  <div className="mt-auto flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      to={`/admin/edit/${spot._id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md
                                  hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <FaEdit className="mr-1" /> Edit
                    </Link>
                    <button
                      onClick={() => deleteSpot(spot._id)}
                      className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md
                                  hover:bg-red-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
