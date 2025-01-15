const express=require("express");
const route=express.Router();
const EmpController=require("../controller/empController")

route.post("/datasave",EmpController.DataSave);
route.get("/displaydata",EmpController.DisplayData);
route.post("/datadelete",EmpController.DeleteData);
route.post("/editdataemp",EmpController.EditEmpData);
route.post("/empdatasave",EmpController.UpDateEmpData);
route.post("/datasearch",EmpController.SearchEmpData);

module.exports=route;