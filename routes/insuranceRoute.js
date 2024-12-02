// routes/insuranceRoute.js
import express from "express";

import {
  getInsurances,
  addInsurance,
  deleteAllInsurances,
} from "../controllers/InsuranceController.js";

const router = express.Router();

router.get("/", getInsurances);
router.post("/", addInsurance);
router.delete("/", deleteAllInsurances);

export default router;
