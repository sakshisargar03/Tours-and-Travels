import express from "express";
import { getPlaces, addPlace } from "../controllers/tourismController.js";
const router = express.Router();

router.get("/", getPlaces);
router.post("/", addPlace);

export default router;
