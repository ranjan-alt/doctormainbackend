import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    country: { type: String, required: true }, // Added country field
    state: { type: String, required: true },
    city: { type: String, required: true },
    slots: [
      {
        day: { type: String, required: true },
        time: { type: String, required: false }, // or fromTime and toTime
        fromTime: { type: String },
        toTime: { type: String },
      },
    ],
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
export default doctorModel;
