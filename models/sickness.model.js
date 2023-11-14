const mongoose = require("mongoose");

const sicknessSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User",
  },
  diagnosis: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Doctor",
  },
  hospitalId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Hospital",
  },
  prescriptionId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Prescription",
  },
});

const Sickness = mongoose.model("Sickness", sicknessSchema);

module.exports = Sickness;
