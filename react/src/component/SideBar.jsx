import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open by default

  return (
    <>
      {/* Fixed Header */}
      <Navbar  expand="lg"  variant="dark" fixed="top" style={{ zIndex: 1000 }}>
        <Container>
          <Navbar.Brand href="#" style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
            {/* Employee DashBorad */}
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div id="adminDash" style={{ display: "flex", minHeight: "100vh", marginTop: "60px" }}>
        {/* Left Menu (Sidebar) */}
        <Offcanvas
          show={sidebarOpen}
          onHide={() => setSidebarOpen(false)}
          placement="start"
          scroll={true}
          backdrop={false}
          style={{
            width: "250px",
            backgroundColor: "#2980b9", // Darker blue for sidebar
          }}
        >
          <Offcanvas.Header closeButton> 
            <Offcanvas.Title>Admin Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav  className="flex-column">
              <Nav.Link as={Link} to="home" className="inputcolor">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="insert" className="inputcolor">
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="display" className="inputcolor">
                Display
              </Nav.Link>
              <Nav.Link as={Link} to="search" className="inputcolor">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="update" className="inputcolor">
                Update
              </Nav.Link>
              <Nav.Link as={Link} to="contact" className="inputcolor">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Sidebar Toggle Button */}
        <Button
          variant="primary"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: "fixed",
            top: "10px",
            zIndex: 1001,
            fontSize: "24px",
            padding: "10px",
            borderRadius: "5px",
            color: "#fff",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          ☰
        </Button>
      </div>

      {/* Mobile and Tablet View (Sidebar toggle) */}
      <style>
        {`
          @media screen and (max-width: 768px) {
            #adminDash {
              flex-direction: column;
            }
            #leftmenu {
              position: absolute;
              height: 100%;
              width: 250px;
              background-color: #2980b9;
              top: 60px;
              left: 0;
              z-index: 100;
            }
            #rightdata {
              margin-left: 0;
              padding: 10px;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default SideBar;





