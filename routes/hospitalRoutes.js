// routes/hospitalRoutes.js
import express from "express";
import {
  getHospitals,
  addHospital,
} from "../controllers/hospitalController.js";

const router = express.Router();

// Define routes for getting and adding hospitals
router.get("/", getHospitals);
router.post("/", addHospital);

export default router;
