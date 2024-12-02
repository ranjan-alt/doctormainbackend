const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  insurances: [{ type: String }],
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
