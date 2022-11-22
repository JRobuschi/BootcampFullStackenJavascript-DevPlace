import React from "react";
import { Navbar, Nav } from "react-bootstrap/";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuHotdog } from "react-icons/cg";
const Header = (props) => {
  function selectSection(e) {
    props.setSection(e.target.textContent);
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" className="ms-5">
          ELECTRO_SHOP
        </Navbar.Brand>
        <Nav className="nav-list ms-auto me-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register" onClick={selectSection}>
            Register
          </Nav.Link>
          <Nav.Link href="/cart">
            <AiOutlineShoppingCart />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
