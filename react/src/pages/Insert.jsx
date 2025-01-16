import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { message } from "antd";

const Insert = () => {
  const [input, setInput] = useState({});
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let api = "http://localhost:8000/employee/datasave";
    axios.post(api, input).then((res) => {
      message.success("Data saved successfully!");
      setInput({}); // Clear the form
    }).catch(err => {
      message.error("Error saving data.");
    });
  };

  return (
    <>
      <div className="form-container">
        <center>
          <Form className="form-wrapper">
            <h3 className="form-title">Data Insert Form</h3>
            <Form.Group className="mb-3" controlId="formEmpId">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control 
                type="text" 
                 className='inputsize'
                name="empid" 
                value={input.empid || ""} 
                placeholder="Enter Employee ID" 
                onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                 className='inputsize'
                value={input.name || ""} 
                placeholder="Enter Employee Name" 
                onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Enter City</Form.Label>
              <Form.Control 
                type="text" 
                 className='inputsize'
                name="city" 
                value={input.city || ""} 
                placeholder="Enter Employee City" 
                onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSalary">
              <Form.Label>Enter Salary</Form.Label>
              <Form.Control 
                type="text" 
                 className='inputsize'
                name="sallary" 
                value={input.sallary || ""} 
                placeholder="Enter Employee Salary" 
                onChange={handleInput} />
            </Form.Group>
            <Button 
              variant="primary" 
              type="button" 
              className="w-100 submit-btn" 
              onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </center>
      </div>
    </>
  );
};

export default Insert;
