const {
  createMedicine,
  getMedicineById,
  updateMedicineById,
  deleteMedicineById,
} = require("../controllers/medicine.controller");

module.exports = function (app) {
  app.post("/fitsy/api/v1/medicines", createMedicine);

  app.get("/fitsy/api/v1/medicines/:id", getMedicineById);

  app.put("/fitsy/api/v1/medicines/:id", updateMedicineById);

  app.delete("/fitsy/api/v1/medicines/:id", deleteMedicineById);
};
