import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";
import tourismRoutes from "./routes/tourismRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import compareRoutes from "./routes/compareRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/tourism", tourismRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/compare", compareRoutes);
app.use("/api/booking", bookingRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
