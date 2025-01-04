const express=require("express");
const route=express.Router();
const EmpController=require("../controller/empController")

route.post("/datasave",EmpController.DataSave);
route.get("/displaydata",EmpController.DisplayData);



module.exports=route;