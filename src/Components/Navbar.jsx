import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <Navbar variant="dark" bg="light" expand="lg" className="navber">
      <Navbar.Brand href="/">
        {" "}
        <img src="./logoReady.png" alt="" className="logoMain" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/"></Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio">Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/certificates">Certificates</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
