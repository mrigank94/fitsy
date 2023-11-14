require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { DB_URL } = require("./configs/db.config");
const { PORT } = require("./configs/server.config");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(`${DB_URL}`)
  .then(() => console.log("Connected to mongodb successfully"))
  .catch((ex) => console.log("Error occurred", ex));

require("./routes/auth.route")(app);
require("./routes/hospital.route")(app);
require("./routes/doctor.route")(app);
require("./routes/prescription.route")(app);
require("./routes/sickness.route")(app);
require("./routes/medicine.route")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
