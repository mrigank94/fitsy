const { signin, signup } = require("../controllers/auth.controller");

module.exports = function (app) {
  app.post("/fitsy/api/v1/auth/signin", signin);

  app.post("/fitsy/api/v1/auth/signup", signup);
};
