import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    const api = "https://merncrud-2.onrender.com/employee/displaydata";
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
      <td>{key.emp_id}</td>
      <td>{key.emp_name}</td>
      <td>{key.emp_city}</td>
      <td>{key.emp_sallary}</td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <center>
        <h4>Employee Records</h4>
      </center>
      <div className="table-responsive">
        <Table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Emp Id</th>
              <th>Emp Name</th>
              {/* <th>Emp City</th> */}
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
