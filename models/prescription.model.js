const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  medicines: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Medicine",
  },
  doctorFees: {
    type: Number,
  },
  medicineFees: {
    type: Number,
  },
  tests: {
    type: String,
  },
  duration: {
    type: Number,
  },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
