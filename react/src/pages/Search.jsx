import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Search = () => {
    const [empdata, setEmpData] = useState("");
    const [mydata, setMydata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = () => {
        setLoading(true);
        setError(""); // Reset error state
        let api = "http://localhost:8000/employee/datasearch";
        axios
            .post(api, { empdata: empdata })
            .then((res) => {
                setMydata(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching data");
                setLoading(false);
            });
    };

    const ans = mydata.length > 0 ? (
        mydata.map((key) => (
            <tr key={key.emp_id}>
                <td>{key.emp_id}</td>
                <td>{key.emp_name}</td>
                <td>{key.emp_city}</td>
                <td>{key.emp_sallary}</td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="4" className="text-center">No data found</td>
        </tr>
    );

    return (
        <Container>
            <Row className="my-4">
                <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                    <Form className="w-100">
                        <Form.Group controlId="searchForm">
                            <Form.Label>Enter Employee Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search by Name"
                                value={empdata}
                                onChange={(e) => setEmpData(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" className="btnsize" onClick={handleSubmit} >
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="table-responsive">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <Table striped bordered hover responsive>
                                <thead className="table-primary">
                                    <tr>
                                        <th>Emp Id</th>
                                        <th>Emp Name</th>
                                        <th>Emp City</th>
                                        <th>Emp Salary</th>
                                    </tr>
                                </thead>
                                <tbody>{ans}</tbody>
                            </Table>
                        )}
                        {error && <div className="text-danger">{error}</div>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;
