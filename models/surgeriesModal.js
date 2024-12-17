import mongoose from "mongoose";

const procedureSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const specialtySchema = new mongoose.Schema({
  name: { type: String, required: true },
  procedures: [procedureSchema],
});

const surgeriesModal = mongoose.model("Surgeries", specialtySchema);
export default surgeriesModal;
