import React from "react";
import { Navbar, Nav } from "react-bootstrap/";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="ms-5">
                    CHALLENGE
                </Navbar.Brand>
                <Nav className="ms-auto me-5">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;