// controllers/hospitalController.js
import Hospital from "../models/HospitalModal.js";
// Example of a function to add a hospital
export const addHospital = async (req, res) => {
  try {
    const { name, insurances } = req.body;

    // Check if the name and insurances are provided
    if (!name || !Array.isArray(insurances) || insurances.length === 0) {
      return res.status(400).json({ message: "Invalid data provided" });
    }

    // Create a new hospital instance
    const newHospital = new Hospital({
      name,
      insurances,
    });

    // Save the new hospital to the database
    await newHospital.save();

    return res.status(201).json(newHospital); // Respond with the created hospital
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add hospital" });
  }
};

// Example of a function to get hospitals
export const getHospitals = async (req, res) => {
  try {
    // Fetch all hospitals from the DB
    const hospitals = await Hospital.find();
    return res.status(200).json({ hospitals, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve hospitals" });
  }
};

// delete all hospitals
export const deleteAllHospital = async (req, res) => {
  try {
    await Hospital.deleteMany();
    res.json({
      message: "All hospitals have been deleted successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
