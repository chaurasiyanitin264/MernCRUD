const EmpModel=require("../model/empModel");

const DataSave=async(req,res)=>{
    const {empid,name,city,sallary}= await req.body;
    console.log(req.body);
    await EmpModel.create({
        emp_id:empid,
        emp_name:name,
        emp_city:city,
        emp_sallary:sallary
    })
res.send("ok");
}

const DisplayData=async(req,res)=>{
     const MyData=await EmpModel.find();
    // console.log(MyData);
    res.send(MyData)
}

// const DeleteData=async(req,res)=>{
//     const {id}=req.body;
//     const empDel=await EmpModel.findByIdAndDelete(id);
//     res.send("okkk");
//     // console.log(id)
// }







const DeleteData=async(req,res)=>{
    const {id}=req.body;
    console.log(req.body);
    const deldata=await EmpModel.findByIdAndDelete(id);
    res.send("okkk")
}

const EditEmpData=async(req,res)=>{
    const {id}=req.body;
    const EditEmp=await EmpModel.findById(id);
    res.send(EditEmp);
    // console.log(req.body);
}

const UpDateEmpData=async(req,res)=>{
    // console.log(req.body);
    const {_id,emp_id,emp_name,emp_city,emp_sallary}=req.body;
    const Data = await EmpModel.findByIdAndUpdate(_id,{
        emp_id,
        emp_name,
        emp_city,
        emp_sallary
    })
    // res.send("okkk");
    res.send(Data);
}

const SearchEmpData=async(req,res)=>{
    // console.log(req.body);
    const {empdata}=req.body;
    const Data=await EmpModel.find({"emp_name":{$regex:empdata,$options:'i'}});
    res.send(Data);
    // console.log(Data);
    // res.send("okkk")
}

module.exports={
    DataSave,
    DisplayData,
    DeleteData,
    EditEmpData,
    UpDateEmpData,
    SearchEmpData
}