import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand href="#home">Store Mern</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  <span style={{ fontSize: "1.8em" }}>🛒</span> Carrinho
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
              <Nav.Link href="">
                <span style={{ fontSize: "1.8em" }}>🚪</span> Login
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
