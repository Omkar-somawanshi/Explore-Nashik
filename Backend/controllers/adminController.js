import Admin from "../models/Admin.js";
import Spot from "../models/spot.js";
import jwt from "jsonwebtoken";

// Token Generator
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

// Register Admin
export const register = async (req, res) => {
  const { email, password } = req.body;

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  const newAdmin = await Admin.create({ email, password });

  if (newAdmin) {
    res.status(201).json({
      _id: newAdmin._id,
      email: newAdmin.email,
      token: generateToken(newAdmin._id),
    });
  } else {
    res.status(400).json({ message: "Invalid admin data" });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({ token: generateToken(admin._id) });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

// Add a Spot
export const addSpot = async (req, res) => {
  const newSpot = new Spot(req.body);
  await newSpot.save();
  res.status(201).json(newSpot);
};

// Get All Spots
export const getAllSpots = async (req, res) => {
  const spots = await Spot.find();
  res.json(spots);
};

// Delete a Spot
export const deleteSpot = async (req, res) => {
  await Spot.findByIdAndDelete(req.params.id);
  res.json({ message: "Spot deleted" });
};

// Update a Spot
export const updateSpot = async (req, res) => {
  const updated = await Spot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};
