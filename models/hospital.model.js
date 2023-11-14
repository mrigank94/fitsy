const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 10,
  },
  description: {
    type: String,
  },
  numOfBeds: {
    type: Number,
  },
  address: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
