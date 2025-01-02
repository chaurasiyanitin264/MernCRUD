const StuModel = require("../model/StdModel");
const DataSave = async (req, res) => {
    const { rollno, name, city, fees } = req.body;
    // console.log(req.body);
    await StuModel.create(
        {
            rollno: rollno,
            name: name,
            city: city,
            fees: fees
        }
    )
    res.send("ok");
}

const DataDisplay = async (req, res) => {
    const MyData = await StuModel.find();
    res.send(MyData)
    console.log(MyData);
}
module.exports = {
    DataSave,
    DataDisplay
};