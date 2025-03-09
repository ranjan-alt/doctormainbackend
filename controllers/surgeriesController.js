import surgeriesModal from "../models/surgeriesModal.js";
import path from "path";
import SurgeryQuery from "../models/surgeryQueries.js";
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

export const surgeryqueries = async (req, res) => {
  try {
    const { name, city, phone, procedure, surgery } = req.body;
    if (!city || !surgery || !name || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newQuery = new SurgeryQuery({
      name,
      city,
      phone,
      procedure,
      surgery,
    });
    // Save the new query to the database
    await newQuery.save();

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Surgery query submitted successfully!",
      data: newQuery,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
