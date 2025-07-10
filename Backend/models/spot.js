import mongoose from "mongoose";


const SpotSchema = new mongoose.Schema({
  name: String,
  category: String,
  location: String,
  image: [String],
  videoUrl: String,
  description: String,
  mapLink: String,
  rating: Number,
});

export default mongoose.model("spot", SpotSchema);
