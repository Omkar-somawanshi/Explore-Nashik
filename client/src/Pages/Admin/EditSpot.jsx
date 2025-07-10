import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../Components/Admin/AdminLayout"; // Update path if needed

const EditSpot = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchSpot = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/spots", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const current = res.data.find((s) => s._id === id);
        if (current) setFormData(current);
      } catch (error) {
        alert("Failed to load spot details");
      }
    };

    fetchSpot();
  }, [id, token]);

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

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      image: prev.image.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`http://localhost:5000/api/admin/spot/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Spot updated successfully!");
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Error updating spot");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Edit Spot</h2>
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
            placeholder="Category"
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
              placeholder="Add Image URL"
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
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt="preview"
                    className="h-16 w-24 object-cover border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-0 right-0 bg-red-600 text-white px-1 text-xs rounded-full"
                  >
                    ✕
                  </button>
                </div>
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
            placeholder="Rating"
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
            {loading ? "Updating..." : "Update Spot"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditSpot;
