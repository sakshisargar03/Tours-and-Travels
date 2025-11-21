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
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "secret123", resave: false, saveUninitialized: true }));

mongoose.connect("mongodb://localhost:27017/travel");

// ROUTES
app.use("/packages", require("./routes/packageRoutes"));
app.use("/places", require("./routes/placeRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/booking", require("./routes/bookingRoutes"));

app.get("/", (req, res) => res.render("index"));

app.listen(5000, () => console.log("Server running on 5000"));
