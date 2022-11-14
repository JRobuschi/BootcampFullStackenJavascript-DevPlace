import React from "react";
import { Navbar, Nav } from "react-bootstrap/";
import "./Header.css";

const Header = (props) => {
  function selectSection(e) {
    props.setSection(e.target.textContent);
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/" className="ms-5">
          ELECTRO_SHOP
        </Navbar.Brand>
        <Nav className="ms-auto me-5">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register" onClick={selectSection}>
            Register
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
