import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import dummySpots from "../assets/dummySpots";

const SpotDetails = () => {
  const { id } = useParams();
  const spot = dummySpots.find((spot) => spot.id === id);
  const [activeImage, setActiveImage] = useState(spot?.image?.[0]);
  const [isVideoActive, setIsVideoActive] = useState(false);

  if (!spot) {
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        Spot not found. <Link to="/explore" className="underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4 sm:px-6">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 drop-shadow mb-6">
        {spot.name}
      </h1>

      {/* Location and Rating */}
      <p className="text-center text-sm sm:text-base text-gray-500 mb-4">
        📍 {spot.location} • ⭐ {spot.rating}
      </p>

      {/* Main Display */}
      <div className="w-full rounded-lg shadow-lg overflow-hidden mb-6 aspect-video">
        {isVideoActive && spot.videoUrl ? (
          <iframe
            src={`https://www.youtube.com/embed/${spot.videoUrl.split("youtu.be/")[1].split("?")[0]}`}
            title={spot.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        ) : (
          <img
            src={activeImage}
            alt={spot.name}
            className="w-full h-full object-cover rounded-lg transition-all duration-300"
          />
        )}
      </div>

      {/* Thumbnails + Video Option */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        {spot.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${spot.name} thumbnail ${index}`}
            onClick={() => {
              setIsVideoActive(false);
              setActiveImage(img);
            }}
            className={`h-16 w-24 object-cover rounded-md border-2 cursor-pointer transition hover:scale-105 ${
              img === activeImage && !isVideoActive ? "border-purple-600" : "border-transparent"
            }`}
          />
        ))}

        {spot.videoUrl && (
          <div
            onClick={() => setIsVideoActive(true)}
            className={`relative h-16 w-24 rounded-md border-2 cursor-pointer transition hover:scale-105 ${
              isVideoActive ? "border-purple-600" : "border-transparent"
            }`}
          >
            <img
              src="https://img.icons8.com/color/96/youtube-play.png"
              alt="Video thumbnail"
              className="h-full w-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-sm font-bold">
               Video
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-8 bg-white/30 backdrop-blur p-6 rounded-xl shadow-xl transition duration-300">
        <p className="text-lg text-gray-700 leading-relaxed">{spot.description}</p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a
          href={spot.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
        >
          📍 View on Map
        </a>
        <Link
          to="/explore"
          className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md hover:bg-purple-50"
        >
          ← Back to Explore
        </Link>
      </div>
    </div>
  );
};

export default SpotDetails;
