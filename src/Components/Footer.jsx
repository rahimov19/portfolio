import React from "react";
import { Navbar } from "react-bootstrap";

export default function footer() {
  return (
    <Navbar className="footer">
      <Navbar.Brand href="#home">Akbar Rakhimov's page</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Created with React</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
