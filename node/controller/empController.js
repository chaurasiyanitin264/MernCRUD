const EmpModel=require("../model/empModel");

const DataSave=async(req,res)=>{
    const {empid,name,city,sallary}= await req.body;
    console.log(req.body);
    await EmpModel.create({
        empid:empid,
        name:name,
        city:city,
        sallary:sallary
    })
res.send("ok");
}

const DisplayData=async(req,res)=>{
     const MyData=await EmpModel.find();
    // console.log(MyData);
    res.send(MyData)
}

module.exports={
    DataSave,
    DisplayData
}