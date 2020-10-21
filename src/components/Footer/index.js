import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-2">
            <span className="text-muted">Feito por &copy; Marcos Tomaz</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;