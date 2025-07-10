import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminroutes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/admin", adminRoutes);

app.use("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
