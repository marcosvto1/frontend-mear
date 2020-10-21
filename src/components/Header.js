import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Store Mern</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Produtos</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home"><span style={{ fontSize: '1.8em' }}>🛒</span> Carrinho</Nav.Link>
              <Nav.Link href="#home">
              <span style={{ fontSize: '1.8em' }}>🤝</span>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
