import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../Components/Admin/AdminLayout";

const AddSpot = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    image: [],
    videoUrl: "",
    description: "",
    mapLink: "",
    rating: "",
  });

  const [imageInput, setImageInput] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("adminToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addImageToList = () => {
    if (imageInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        image: [...prev.image, imageInput.trim()],
      }));
      setImageInput("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Unauthorized. Please login as admin.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/admin/spot", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Spot added successfully!");
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Error adding spot: " + error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Add New Spot</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Spot Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category (e.g. Religious, Nature)"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Image URL"
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <button
              type="button"
              onClick={addImageToList}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              + Add
            </button>
          </div>

          {formData.image.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.image.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="preview"
                  className="h-16 w-24 object-cover border rounded"
                />
              ))}
            </div>
          )}

          <input
            type="text"
            name="videoUrl"
            placeholder="YouTube Video URL"
            value={formData.videoUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="mapLink"
            placeholder="Google Map Link"
            value={formData.mapLink}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="number"
            name="rating"
            step="0.1"
            placeholder="Rating (e.g. 4.8)"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded font-semibold hover:bg-purple-800 transition"
          >
            {loading ? "Adding..." : "Add Spot"}
          </button>
        </form>
      </div>
    
  );
};

export default AddSpot;
