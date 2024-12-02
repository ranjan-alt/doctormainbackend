// routes/hospitalRoutes.js
import express from "express";
import {
  getHospitals,
  addHospital,
  deleteAllHospital,
} from "../controllers/HospitalController.js";

const router = express.Router();

// Define routes for getting and adding hospitals
router.get("/", getHospitals);
router.post("/", addHospital);
router.delete("/", deleteAllHospital);

export default router;
