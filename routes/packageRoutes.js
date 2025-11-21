import express from "express";
import { getPackages, addPackage } from "../controllers/packageController.js";
const router = express.Router();

router.get("/", getPackages);
router.post("/", addPackage);

export default router;
