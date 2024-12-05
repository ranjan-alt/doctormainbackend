// routes/hospitalRoutes.js
import express from "express";
import {
  getHospitals,
  addHospital,
  deleteAllHospital,
  editHospital,
} from "../controllers/HospitalController.js";

const router = express.Router();

// Define routes for getting and adding hospitals
router.get("/", getHospitals);
router.post("/", addHospital);
router.put("/edit/:hospitalId", editHospital);
router.delete("/", deleteAllHospital);

export default router;
