// models/farmerModel.js
import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    idNumber: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    farmingType: { type: String, required: true },
    region: { type: String, required: true },
  },
  { timestamps: true }
);

const Farmer = mongoose.model("Farmer", farmerSchema);

export default Farmer;
