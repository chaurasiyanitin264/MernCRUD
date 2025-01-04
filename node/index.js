// मॉड्यूल्स इंपोर्ट करें
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// रूट्स फाइल इंपोर्ट करें
const EmpRoute = require("./routes/empRoutes");

// Express ऐप बनाएं
const app = express();

// MongoDB से कनेक्ट करें
mongoose
  .connect("mongodb://127.0.0.1:27017/Emp")
  .then(() => {
    console.log("DB Connected!!!");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

// Middleware का उपयोग करें
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// रूट्स को ऐड करें
app.use("/employee", EmpRoute);

// सर्वर चलाएं
app.listen(8000, () => {
  console.log("Server running on port 8000!");
});
