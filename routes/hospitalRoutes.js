import express from "express";
import {
  getHospitals,
  addHospital,
} from "../controllers/hospitalController.js";

const router = express.Router();

router.get("/", getHospitals);
router.post("/", addHospital);

export default router; // Export the router as the default export
