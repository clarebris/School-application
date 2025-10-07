import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import farmerRoutes from "./routes/farmerRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/farmers", farmerRoutes);

app.use("/api/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
