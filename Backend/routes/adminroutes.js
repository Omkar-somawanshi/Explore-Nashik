import express from "express";
import {
  loginAdmin,
  register,
  addSpot,
  getAllSpots,
  deleteSpot,
  updateSpot,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/register", register);

router.post("/spot", protect, addSpot);
router.get("/spots", protect, getAllSpots);
router.put("/spot/:id", protect, updateSpot);
router.delete("/spot/:id", protect, deleteSpot);

export default router;
