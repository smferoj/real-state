import React, { Fragment } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../assets/svg/logo.svg'
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="none" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link>
                <NavLink to="/">Home</NavLink>
              </Nav.Link>

              <NavDropdown title="Properties" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/products">Flats</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to="/products">Plots</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to="/products">Apartment</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to="/products">Bunglow</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
              <Nav.Link>
                <NavLink to="/contact">Contact Us</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about">About Us</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
