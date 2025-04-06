import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import './CustomNavbar.css';

function CustomNavbar() {
  return (
    <Navbar bg="dark"
            sticky="top"
            data-bs-theme="dark" 
            collapseOnSelect expand="lg" 
            className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>douglasWB</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/skills">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Portfolio" id="collapsible-nav-dropdown">
              <NavDropdown title="WebApps" id="webapps-nested-dropdown" drop="end">
                <LinkContainer to="/webapps/findyournextjam">
                  <NavDropdown.Item>Find Your Next Jam</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/webapps/condoai">
                  <NavDropdown.Item>Condo AI App</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown.Divider />
              <LinkContainer to="/webpages">
                <NavDropdown.Item>WebPages</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer to="/blog">
              <Nav.Link>Thai Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/music">
              <Nav.Link>My Music</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;