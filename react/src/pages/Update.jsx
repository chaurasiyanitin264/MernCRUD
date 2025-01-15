

import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import editimg from "../img/edit.jpeg";
import deleteimg from "../img/delete.png";
import { useNavigate } from "react-router-dom";
import {message} from "antd";
const UpDate = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    const api = "http://localhost:8000/employee/displaydata";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const mydel = (id) => {
    let api = "http://localhost:8000/employee/datadelete";
    axios.post(api, { id: id }).then((res) => {
      message.success("Data deleted");
      loadData();
    });
  };

  const ans = mydata.map((key, index) => (
    <tr key={index}>
      <td>{key.emp_id}</td>
      <td>{key.emp_name}</td>
      <td>{key.emp_city}</td>
      <td>{key.emp_sallary}</td>
      <td>
        <a
          href="#"
          onClick={() => {
            navigate(`/editdata/${key._id}`);
          }}
        >
          <img src={editimg} alt="Edit" width="30px" />
        </a>
      </td>
      <td>
        <a
          href="#"
          onClick={() => {
            mydel(key._id);
          }}
        >
          <img src={deleteimg} alt="Delete" width="30px" />
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h4>Employee Update Records</h4>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          {/* Responsive Table Wrapper */}
          <div className="table-responsive">
            <Table className="table table-striped table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Emp Id</th>
                  <th>Emp Name</th>
                  <th>Emp City</th>
                  <th>Emp Salary</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{ans}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpDate;
