const {
  createSickness,
  getSicknessById,
  updateSicknessById,
  deleteSicknessById,
} = require("../controllers/sickness.controller");

module.exports = function (app) {
  app.post("/fitsy/api/v1/sicknesses", createSickness);

  app.get("/fitsy/api/v1/sicknesses/:id", getSicknessById);

  app.put("/fitsy/api/v1/sicknesses/:id", updateSicknessById);

  app.delete("/fitsy/api/v1/sicknesses/:id", deleteSicknessById);
};
