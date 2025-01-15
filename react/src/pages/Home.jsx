import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
} from "chart.js";

// Register the necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abzugVoll: 100,
      fullScore: 86,
      dataNeu: {
        labels: ["Gesamte Punktanzahl"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#0069b4", "#ddd"], // Add second color for remaining score
            hoverBackgroundColor: ["#0069b4b3", "#ccc"]
          }
        ]
      },
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#0069b4b3",
            borderColor: "#0069b4",
            borderWidth: 1,
            hoverBackgroundColor: "#0069b447",
            hoverBorderColor: "#0069b4",
            data: [65, 59, 100, 81, 56, 55, 40]
          }
        ]
      },
      dataZwei: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#0069b4",
            borderColor: "#0069b4",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#0069b447",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#0069b447",
            pointHoverBorderColor: "#0069b4",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    };
  }

  // This function updates the doughnut chart based on the scores
  updateData = () => {
    this.setState({
      dataNeu: {
        labels: ["Gesamte Punktanzahl"],
        datasets: [
          {
            data: [
              this.state.fullScore,
              this.state.abzugVoll - this.state.fullScore
            ],
            backgroundColor: ["#0069b4", "#ddd"], // Additional color for the remaining portion
            hoverBackgroundColor: ["#0069b4b3", "#ccc"]
          }
        ]
      }
    });
  };

  render() {
    return (
      <div>
        <Container>
          {/* Row for Bar Chart and Doughnut Chart */}
          <Row className="mb-4">
            <Col md={6} xs={12}>
              <Bar
                data={this.state.data}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: "Monthly Data"
                    }
                  }
                }}
                style={{ height: "350px" }}
              />
            </Col>
            <Col md={6} xs={12}>
              <Doughnut
                data={this.state.dataNeu}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: "Score Distribution"
                    }
                  }
                }}
                style={{ height: "350px" }}
              />
            </Col>
          </Row>

          {/* Row for Button and Line Chart */}
          <Row>
            <Col md={6} xs={12}>
              <Button variant="primary" onClick={this.updateData}>
                Update Score
              </Button>
            </Col>
            <Col md={6} xs={12}>
              <Line
                data={this.state.dataZwei}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: "Yearly Data"
                    }
                  }
                }}
                style={{ height: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
