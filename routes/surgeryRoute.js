import express from "express";

import {
  addSurgeriesToDB,
  getSurgeries,
  surgeryqueries,
} from "../controllers/surgeriesController.js";
const router = express.Router();

router.post("/", addSurgeriesToDB);
router.get("/", getSurgeries);
router.post("/surgeryqueries", surgeryqueries);

export default router;
