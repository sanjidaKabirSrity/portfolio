import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import { Navbar , Container , Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" style={{backgroundColor:"#202026"}} className="fixed-top">
            <Container>
                <Navbar.Brand href="#home" className="textGulapi logoText" style={{fontSize:"40px"}}>Sanjida</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/home" className="text-white mx-auto" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" className="text-white mx-auto">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;