const {
  createPrescription,
  getPrescriptionById,
  updatePrescriptionById,
  deletePrescriptionById,
  getAllPrescriptionsByPatientId,
  getAllPrescriptionsByDoctorId,
} = require("../controllers/prescription.controller");

module.exports = function (app) {
  app.post("/fitsy/api/v1/prescriptions", createPrescription);

  app.get("/fitsy/api/v1/prescriptions/:id", getPrescriptionById);

  app.put("/fitsy/api/v1/prescriptions/:id", updatePrescriptionById);

  app.delete("/fitsy/api/v1/prescriptions/:id", deletePrescriptionById);

  app.get(
    "/fitsy/api/v1/prescriptions/patient/:id",
    getAllPrescriptionsByPatientId
  );

  app.get(
    "/fitsy/api/v1/prescriptions/doctor/:id",
    getAllPrescriptionsByDoctorId
  );
};
