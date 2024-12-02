const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Insurance = mongoose.model("Insurance", insuranceSchema);

module.exports = Insurance;
