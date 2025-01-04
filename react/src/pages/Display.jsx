import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Display = () => {
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
    </tr>
  ));

  return (
    <div className="container mt-4">
      <center>
        <h4>Employee Records</h4>
      </center>
      <div className="table-responsive">
        <Table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Emp Name</th>
              <th>Emp City</th>
              <th>Emp Salary</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default Display;
