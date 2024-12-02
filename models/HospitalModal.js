import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  insurances: [{ type: String }],
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
