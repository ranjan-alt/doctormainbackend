// routes/insuranceRoute.js
import express from "express";

import {
  getInsurances,
  addInsurance,
  deleteAllInsurances,
  editInsurance,
  deleteInsurance,
} from "../controllers/InsuranceController.js";

const router = express.Router();

router.get("/", getInsurances);
router.post("/", addInsurance);
router.delete("/", deleteAllInsurances);
router.put("/edit/:insuranceId", editInsurance);
router.delete("/:id", deleteInsurance);

export default router;
