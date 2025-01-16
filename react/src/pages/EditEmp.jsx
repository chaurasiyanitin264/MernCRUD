// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from "axios";
// import { useParams } from 'react-router-dom';


// const EditEmp = () => {
//   const {id}=useParams();
//   const [input, setInput] = useState({});


// const loadData=()=>{
//     let api="http://localhost:8000/employee/editdataemp";
//     axios.post(api,{id:id}).then((res)=>{
//         // console.log(res.data);
//         setInput(res.data);
//     })
// }

// useEffect(()=>{
//     loadData();
// },[]);



//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput(values => ({ ...values, [name]: value }));
//     console.log(input)
//   }

//   const handleSubmit = () => {
//     let api = "http://localhost:8000/employee/empdatasave";
//     axios.post(api, input).then((res) => {
//       alert("data update successfully");
//     })
//   }

//   return (
//     <>
//       <center> <h1>Employee Edit Data</h1></center>
//       <center>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             {/* <Form.Label>Emp ID</Form.Label> */}
// <Form.Control type="number" name="emp_id"  value={input.emp_id}
//   placeholder='Emp ID'
//   className='inputsize' onChange={handleInput} />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             {/* <Form.Label>Name</Form.Label> */}
// <Form.Control type="text" name="emp_name"
//   value={input.emp_name} placeholder='Emp Name' className='inputsize'
//   onChange={handleInput} />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             {/* <Form.Label>City</Form.Label> */}
//             <Form.Control type="text" name="emp_city"
//               placeholder='Emp City' value={input.emp_city} className='inputsize'
//               onChange={handleInput} />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             {/* <Form.Label>Booking Date</Form.Label> */}
//             <Form.Control type="text" name="emp_sallary"
//               placeholder='Emp Sallary' value={input.emp_sallary} className='inputsize'
//               onChange={handleInput} />
//           </Form.Group>

//           <Button variant="primary" type="button" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </Form>

//       </center>
//     </>
//   )
// }
// export default EditEmp;



import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';


const EditEmp = () => {
  const { id } = useParams();
  const [input, setInput] = useState({});
  const navigate=useNavigate();

  const loadData = () => {
    let api = "http://localhost:8000/employee/editdataemp";
    axios.post(api, { id: id }).then((res) => {
      // console.log(res.data);
      setInput(res.data);
    })
  }

  useEffect(() => {
    loadData();
  }, []);



  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input)
  }

  const handleSubmit = () => {
    let api = "http://localhost:8000/employee/empdatasave";
    axios.post(api, input).then((res) => {
      message.success("data updated");
      navigate("/Update")
    })
  }

  return (
    <>
      <div className="form-container">
        <center>
          <Form className="form-wrapper">
            <h3 className="form-title">UpDate Data</h3>
            <Form.Group className="mb-3" controlId="formEmpId">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                name="emp_id" value={input.emp_id}
                placeholder='Emp ID'
                className='inputsize' onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="emp_name"
                value={input.emp_name}
                placeholder='Emp Name'
                className='inputsize'
                onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                name="emp_city"
                placeholder='Emp City'
                value={input.emp_city}
                className='inputsize'
                onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSalary">
              <Form.Label>Enter Salary</Form.Label>
              <Form.Control
                type="text"
                name="emp_sallary"
                placeholder='Emp Sallary'
                value={input.emp_sallary}
                className='inputsize'
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
  )
}
export default EditEmp;



