// models/surgeryQueriesModel.js
import mongoose from "mongoose";

const surgeryQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  procedure: { type: String, required: true },
  surgery: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const SurgeryQuery = mongoose.model("SurgeryQuery", surgeryQuerySchema);

export default SurgeryQuery;
