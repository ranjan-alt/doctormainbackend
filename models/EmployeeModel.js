const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    permissions: { type: [String], required: true },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;
