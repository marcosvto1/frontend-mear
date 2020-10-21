import React from "react";
import { Card, Button } from "react-bootstrap";

export const Product = ({ product }) => {
  return (
    <Card className="rounded" style={{ width: '18rem', marginButton: '10rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <div className="d-flex justify-content-end mb-3 text-muted">
           { product.rating} de {product.numReviews} 🕵🏼
        </div>
        <div className="text-center">
        <Button variant="primary">➕ Adicionar Carrinho</Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default Product;
