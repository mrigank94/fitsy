const Hospital = require("../models/hospital.model");

async function createHospital(req, res) {
  const hospital = await Hospital.create(req.body);
  res.status(201).send(hospital);
}

async function getHospitalById(req, res) {
  const id = req.params.id;

  try {
    const hospital = await Hospital.findById(id);
    res.status(200).send(hospital);
  } catch (ex) {
    res.status(404).send({
      message: `Hospital with ID ${id} does not exist`,
    });
  }
}

async function updateHospitalById(req, res) {
  const id = req.params.id;

  await Hospital.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Hospital with ID ${id} updated successfully`,
  });
}

async function deleteHospitalById(req, res) {
  const id = req.params.id;

  await Hospital.findByIdAndDelete(id);

  res.status(200).send({
    message: `Hospital with ID ${id} updated successfully`,
  });
}

module.exports = {
  createHospital,
  getHospitalById,
  updateHospitalById,
  deleteHospitalById,
};
