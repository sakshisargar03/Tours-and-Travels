import express from "express";
import { compareRoute } from "../controllers/compareController.js";
const router = express.Router();

router.post("/", compareRoute);

export default router;
