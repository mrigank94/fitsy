const Doctor = require("../models/doctor.model");

async function createDoctor(req, res) {
  const doctor = await Doctor.create(req.body);
  res.status(201).send(doctor);
}

async function getDoctorById(req, res) {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate("user", "name userId email")
      .populate("hospitals");
    res.status(200).send(doctor);
  } catch (ex) {
    res.status(404).send({
      message: `Doctor with ID ${id} does not exist`,
    });
  }
}

async function updateDoctorById(req, res) {
  const id = req.params.id;

  await Doctor.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Doctor with ID ${id} updated successfully`,
  });
}

async function deleteDoctorById(req, res) {
  const id = req.params.id;

  await Doctor.findByIdAndDelete(id);

  res.status(200).send({
    message: `Doctor with ID ${id} deleted successfully`,
  });
}

async function getAllDoctors(req, res) {
  const doctors = await Doctor.find({})
    .populate("user", "name userId email")
    .populate("hospitals");
  res.send(doctors);
}

module.exports = {
  createDoctor,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
  getAllDoctors,
};
