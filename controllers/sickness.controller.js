const Sickness = require("../models/sickness.model");

async function createSickness(req, res) {
  const sickness = await Sickness.create(req.body);
  res.status(201).send(sickness);
}

async function getSicknessById(req, res) {
  const id = req.params.id;

  try {
    const sickness = await Sickness.findById(id)
      .populate("patient")
      .populate("doctor")
      .populate("hospital")
      .populate("prescription");
    res.status(200).send(sickness);
  } catch (ex) {
    res.status(404).send({
      message: `Sickness with ID ${id} does not exist`,
    });
  }
}

async function updateSicknessById(req, res) {
  const id = req.params.id;

  await Sickness.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Sickness with ID ${id} updated successfully`,
  });
}

async function deleteSicknessById(req, res) {
  const id = req.params.id;

  await Sickness.findByIdAndDelete(id);

  res.status(200).send({
    message: `Sickness with ID ${id} deleted successfully`,
  });
}

module.exports = {
  createSickness,
  getSicknessById,
  updateSicknessById,
  deleteSicknessById,
};
