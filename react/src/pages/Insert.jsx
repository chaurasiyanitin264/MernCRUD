import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";



const Insert = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input)
  }

  const handleSubmit = () => {
    let api = "http://localhost:8000/employee/datasave";
    axios.post(api, input).then((res) => {
      alert("data save");
    })
  }

  return (
    <>
      <center> <h1>Employee Form</h1></center>
      <center>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Emp ID</Form.Label> */}
            <Form.Control type="number" name="empid" value={input.empid}
              placeholder='Emp ID'
              className='inputsize' onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control type="text" name="name"
              value={input.name} placeholder='Emp Name' className='inputsize'
              onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>City</Form.Label> */}
            <Form.Control type="text" name="city"
              placeholder='Emp City' value={input.city} className='inputsize'
              onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Booking Date</Form.Label> */}
            <Form.Control type="text" name="sallary"
              placeholder='Emp Sallary' value={input.sallary} className='inputsize'
              onChange={handleInput} />
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>

      </center>
    </>
  )
}
export default Insert;
