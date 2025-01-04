import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopMenu=()=>{
    return(
        <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">UpDate</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
        </>
    )
}
export default TopMenu;







// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const TopMenu = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Fixed Header */}
//       <Navbar bg="primary" variant="dark" fixed="top" style={{ zIndex: 1000 }}>
//         <Container>
//           <Navbar.Brand href="#" style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
//             Admin Dashboard
//           </Navbar.Brand>
//         </Container>
//       </Navbar>

//       {/* Main Content */}
//       <div id="adminDash" style={{ display: "flex", minHeight: "100vh", marginTop: "60px" }}>
//         {/* Left Menu (Sidebar) */}
//         <Offcanvas
//           show={sidebarOpen}
//           onHide={() => setSidebarOpen(false)}
//           placement="start"
//           scroll
//           backdrop={false}
//           style={{
//             width: "250px",
//             backgroundColor: "#2980b9", // Sidebar background color
//           }}
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title style={{ color: "#fff" }}>Admin Menu</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="flex-column">
//               {["home", "insert", "display", "search", "update", "contact"].map((link) => (
//                 <Nav.Link
//                   as={Link}
//                   to={link}
//                   className="text-white"
//                   style={{ margin: "5px 0", fontSize: "18px" }}
//                   key={link}
//                 >
//                   {link.charAt(0).toUpperCase() + link.slice(1)}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Offcanvas.Body>
//         </Offcanvas>

//         {/* Right Data Area */}
//         <div
//           id="rightdata"
//           style={{
//             marginLeft: sidebarOpen ? "250px" : "0",
//             padding: "20px",
//             width: "100%",
//             transition: "margin-left 0.3s ease",
//           }}
//         >
//           <Outlet />
//         </div>

//         {/* Sidebar Toggle Button */}
//         <Button
//           variant="primary"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           style={{
//             position: "fixed",
//             top: "15px",
//             left: "15px",
//             zIndex: 1001,
//             fontSize: "24px",
//             padding: "5px 10px",
//             borderRadius: "5px",
//             color: "#fff",
//             boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           ☰
//         </Button>
//       </div>

//       {/* Mobile and Tablet View Styles */}
//       <style>
//         {`
//           @media screen and (max-width: 768px) {
//             #adminDash {
//               flex-direction: column;
//             }
//             #rightdata {
//               margin-left: 0;
//               padding: 15px;
//               width: 100%;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default TopMenu;
