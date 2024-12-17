import express from "express";

import {
  addSurgeriesToDB,
  getSurgeries,
} from "../controllers/surgeriesController.js";
const router = express.Router();

router.post("/", addSurgeriesToDB);
router.get("/", getSurgeries);

export default router;
