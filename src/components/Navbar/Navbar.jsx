import React from "react";
import { Container, Nav, Navbar as Navigator } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
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
          <Nav activeKey="/">
            <Nav.Item>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item inactive"
                }
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item inactive"
                }
              >
                About
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navigator.Collapse>
      </Container>
    </Navigator>
  );
};

export default Navbar;
