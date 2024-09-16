import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navbarStyle = {
        backgroundColor: '#121212',
        color: 'ffffffb2',
        minWidth: '150px',
        top: 0,
        left: 0,
        zIndex: 1020,
    };

    const navLinkStyle = {
        color: 'white',
        textTransform: 'uppercase',
        marginTop: '2rem',
        marginBottom: '2rem',
        marginLeft: '15rem',
        fontWeight: 'bold'
    };

    return (
        <Navbar style={navbarStyle}>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-row" >
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