import surgeriesModal from "../models/surgeriesModal.js";
import path from "path";
console.log("Resolved Path:", path.resolve("../models/surgeriesModal.js"));

export const addSurgeriesToDB = async (req, res) => {
  try {
    const speciality = req.body;

    console.log(speciality, "specislaity");

    if (!speciality || !Array.isArray(speciality)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payload format" });
    }

    const addSpecialty = await surgeriesModal.insertMany(speciality);
    return res.status(200).json({ success: true, addSpecialty });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSurgeries = async (req, res) => {
  try {
    const getSurgeries = await surgeriesModal.find();
    return res.status(200).json({ success: true, getSurgeries });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
