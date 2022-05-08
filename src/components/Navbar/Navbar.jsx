import React from "react";
import { Container, Nav, Navbar as Navigator } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <Navigator bg="dark" variant="dark" sticky="top">
      <Container className="nav-container" fluid>
        <Navigator.Brand className="brand-name" as={Link} to="/">
          SM Classes
        </Navigator.Brand>
        <Navigator.Toggle aria-controls="basic-navbar-nav" />
        <Navigator.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navigator.Collapse>
      </Container>
    </Navigator>
  );
};

export default Navbar;
