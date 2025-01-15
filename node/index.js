const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const EmpRoute = require("./routes/empRoutes");
const app = express();
const port =process.env.PORT ||8000;
const MNDB=process.env.DBCONN;


mongoose
  .connect(MNDB)
  .then(() => {
    console.log("DB Connected!!!");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/employee", EmpRoute);

app.listen(port, () => {
  console.log("Server running on port 8000!");
});
