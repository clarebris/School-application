// routes/farmerRoutes.js
import express from "express";
import { registerFarmer, getFarmers } from "../controllers/farmerController.js";

const router = express.Router();

// POST → Register a new farmer
router.post("/", registerFarmer);

// GET → Get all farmers
router.get("/", getFarmers);

export default router;
