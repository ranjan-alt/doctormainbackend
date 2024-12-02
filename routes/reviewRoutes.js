import express from "express";
// import { addReview, getReviews, updateReview, deleteReview } from "../controllers/reviewController.js";
import {
  addReview,
  getReviews,
  //   updateReview,
  //   deleteReview,
} from "../controllers/ReviewController.js";
// const router = express.Router();
const reviewRouter = express.Router();

// Route to add a review
reviewRouter.post("/add", addReview);

// // Route to get all reviews for a specific doctor
reviewRouter.get("/doctor/:docId", getReviews);

// // Route to update a review
// router.put("/:reviewId", updateReview);

// // Route to delete a review
// router.delete("/:reviewId", deleteReview);

export default reviewRouter;
