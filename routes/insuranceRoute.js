// routes/insuranceRoute.js
import express from "express";

import {
  getInsurances,
  addInsurance,
} from "../controllers/insuranceController.js";

const router = express.Router();

router.get("/", getInsurances);
router.post("/", addInsurance);

export default router;
