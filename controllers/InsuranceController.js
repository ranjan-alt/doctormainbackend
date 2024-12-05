// controllers/insuranceController.js
// import Insurance from "../models/insuranceModel.js"; // Use import instead of require
// import Insurance from "../models/InsuranceModal.js";
import Insurance from "../models/InsuranceModal.js";

// Get all insurance types
export const getInsurances = async (req, res) => {
  try {
    const insurances = await Insurance.find();
    res.json({ insurances, success: true });
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

//edit isnurance

export const editInsurance = async (req, res) => {
  const { insuranceId } = req.params; // Get the insurance ID from URL params
  const { name } = req.body; // Get the updated name from the request body
  console.log(insuranceId, name, "backendd");
  try {
    const updatedInsurance = await Insurance.findByIdAndUpdate(
      insuranceId,
      { name },
      { new: true }
    );
    if (!updatedInsurance) {
      return res.status(404).json({ message: "Insurance not found" });
    }
    res.json({ insurance: updatedInsurance, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all insurances
export const deleteAllInsurances = async (req, res) => {
  try {
    await Insurance.deleteMany(); // Delete all insurance records
    res.json({
      message: "All insurances have been deleted successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
