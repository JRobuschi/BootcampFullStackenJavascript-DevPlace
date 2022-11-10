import React from "react";
import { Navbar, Nav } from "react-bootstrap/";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" id="header-nav">
        <Navbar.Brand href="#home" className="ms-5">
          ELECTRO_SHOP
        </Navbar.Brand>
        <Nav className="ms-auto me-5">
          <Nav.Link href="#home" className="header-links">
            Inicio
          </Nav.Link>
          <Nav.Link href="#features" className="header-links">
            Productos
          </Nav.Link>
          <Nav.Link href="#pricing" className="header-links">
            Login
          </Nav.Link>
          <Nav.Link href="#pricing" className="header-links">
            Register
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
