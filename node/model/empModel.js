const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empid: {
        type: Number,
        min:1,
        max:999,
        required: true 
    },
    name: {
        type: String,
        required: true 
    },
    city: {
        type: String,
        required: true 
    },
    sallary: {
        type: Number,
       require:true 
    }
});

module.exports = mongoose.model("okk", empSchema);
