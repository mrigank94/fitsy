const Medicine = require("../models/medicine.model");

async function createMedicine(req, res) {
  const medicine = await Medicine.create(req.body);
  res.status(201).send(medicine);
}

async function getMedicineById(req, res) {
  const id = req.params.id;

  try {
    const medicine = await Medicine.findById(id);
    res.status(200).send(medicine);
  } catch (ex) {
    res.status(404).send({
      message: `Medicine with ID ${id} does not exist`,
    });
  }
}

async function updateMedicineById(req, res) {
  const id = req.params.id;

  await Medicine.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Medicine with ID ${id} updated successfully`,
  });
}

async function deleteMedicineById(req, res) {
  const id = req.params.id;

  await Medicine.findByIdAndDelete(id);

  res.status(200).send({
    message: `Medicine with ID ${id} deleted successfully`,
  });
}

module.exports = {
  createMedicine,
  getMedicineById,
  updateMedicineById,
  deleteMedicineById,
};
