import express from "express";
import { getHotels, addHotel } from "../controllers/hotelController.js";
const router = express.Router();

router.get("/", getHotels);
router.post("/", addHotel);

export default router;
