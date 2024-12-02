// controllers/insuranceController.js
import Insurance from "../models/insuranceModel.js"; // Use import instead of require

// Get all insurance types
export const getInsurances = async (req, res) => {
  try {
    const insurances = await Insurance.find();
    res.json(insurances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new insurance type
export const addInsurance = async (req, res) => {
  const { name } = req.body;

  const insurance = new Insurance({
    name,
  });

  try {
    const newInsurance = await insurance.save();
    res.status(201).json(newInsurance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
