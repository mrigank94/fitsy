const {
  createHospital,
  getHospitalById,
  updateHospitalById,
  deleteHospitalById,
} = require("../controllers/hospital.controller");

module.exports = function (app) {
  app.post("/fitsy/api/v1/hospitals", createHospital);

  app.get("/fitsy/api/v1/hospitals/:id", getHospitalById);

  app.put("/fitsy/api/v1/hospitals/:id", updateHospitalById);

  app.delete("/fitsy/api/v1/hospitals/:id", deleteHospitalById);
};
