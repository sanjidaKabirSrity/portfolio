import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import { Navbar , Container , Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" style={{backgroundColor:"#202026"}} className="fixed-top">
            <Container>
                <Navbar.Brand href="#home" className="textGulapi logoText" style={{fontSize:"40px"}}>Sanjida</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/home" className="text-white mx-auto">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" className="text-white mx-auto">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/portfolio" className="text-white mx-auto">Portfolio</Nav.Link>
                    <Nav.Link as={NavLink} to="/blogs" className="text-white mx-auto">Blogs</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" className="text-white mx-auto">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;