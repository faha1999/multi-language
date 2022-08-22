import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">Multi Language site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" variant="pills" defaultActiveKey="/home">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>

              <select className="nav-link bd-dark border-0 me-1">
                <option value="en">English</option>
                <option value="bn">Bangle</option>
              </select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
