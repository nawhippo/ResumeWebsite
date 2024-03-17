import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navbarStyle = {
        backgroundColor: '#FFA500',
        color: '#4169E1',
        minWidth: '150px',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 1020,
    };

    const navLinkStyle = {
        color: '#4169E1',
        textTransform: 'uppercase',
        marginTop: '4rem',
        fontWeight: 'bold'
    };

    return (
        <Navbar expand="lg" style={navbarStyle}>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column" style={{ height: "100vh" }}>
                        <Nav.Link as={Link} to="/" style={navLinkStyle}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" style={navLinkStyle}>About Me</Nav.Link>
                        <Nav.Link as={Link} to="/projects" style={navLinkStyle}>My Projects</Nav.Link>
                        <Nav.Link as={Link} to="/skills" style={navLinkStyle}>My Skills</Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={navLinkStyle}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;