import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import editimg from "../img/edit.jpeg";
import deleteimg from "../img/delete.png";
const UpDate = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    const api = "http://localhost:8000/employee/displaydata";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key, index) => (
    <tr key={index}>
      <td>{key.empid}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.sallary}</td>
      <td>
        <img src={editimg} alt="" width="30px"/>
      </td>
      <td>
        <img src={deleteimg} alt="" width="30px"/>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <center>
        <h4>Employee Update Records</h4>
      </center>
      <div className="table-responsive">
        <Table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Emp Name</th>
              <th>Emp City</th>
              <th>Emp Salary</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default UpDate;
