import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
  return (
    <Navbar bg="dark"
            data-bs-theme="dark" 
            collapseOnSelect expand="lg" 
            className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">douglasWB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/skills">Skills</Nav.Link>
            <NavDropdown title="Portfolio" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/webapps">WebApps</NavDropdown.Item>
              <NavDropdown.Item href="/webpages">WebPages</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/blog">My Blog</Nav.Link>
            <Nav.Link eventKey={2} href="/meme">
              My Favorite Meme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;