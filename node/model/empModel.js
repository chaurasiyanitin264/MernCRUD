const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    emp_id: {
        type: Number,
        min:1,
        max:999,
        required: true 
    },
    emp_name: {
        type: String,
        required: true 
    },
    emp_city: {
        type: String,
        required: true 
    },
    emp_sallary: {
        type: Number,
       require:true 
    }
});

module.exports = mongoose.model("okk", empSchema);
