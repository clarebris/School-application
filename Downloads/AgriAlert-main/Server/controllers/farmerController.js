// controllers/farmerController.js
import Farmer from "../models/farmerModel.js";

// Register a new farmer
export const registerFarmer = async (req, res, next) => {
  try {
    const { name, idNumber, phone, farmingType, region } = req.body;

    if (!name || !idNumber || !phone || !farmingType || !region) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const farmer = await Farmer.create({
      name,
      idNumber,
      phone,
      farmingType,
      region,
    });

    res.status(201).json({ success: true, farmer });
  } catch (error) {
    next(error);
  }
};

// Get all farmers
export const getFarmers = async (req, res, next) => {
  try {
    const farmers = await Farmer.find();
    res.json({ success: true, farmers });
  } catch (error) {
    next(error);
  }
};
