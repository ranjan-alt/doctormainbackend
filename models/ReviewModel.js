// models/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointment",
      // required: true,
    },
    docId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    review: { type: String, required: true },
    rating: { type: Number, required: false }, // Optional: add rating feature
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const reviewModal = mongoose.model("review", reviewSchema);

export default reviewModal;
