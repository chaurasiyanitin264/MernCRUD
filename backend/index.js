


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const StuRoutes = require("./routes/StdRoutes");

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/students", StuRoutes);

// MongoDB से कनेक्ट
mongoose.connect("mongodb://127.0.0.1:27017/Andoried").then(() => {
  console.log("DB Connected");
});

// सर्वर सुनना
app.listen(8000, (req, res) => {
  console.log("server on");
});
