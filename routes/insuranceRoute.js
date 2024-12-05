// routes/insuranceRoute.js
import express from "express";

import {
  getInsurances,
  addInsurance,
  deleteAllInsurances,
  editInsurance,
} from "../controllers/InsuranceController.js";

const router = express.Router();

router.get("/", getInsurances);
router.post("/", addInsurance);
router.delete("/", deleteAllInsurances);
router.put("/edit/:insuranceId", editInsurance);

export default router;
