import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "../Ratings";
import StarRating from 'react-star-ratings'

export const Product = ({ product }) => {
  return (
    <Card className="rounded">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>
          <Link to={`produto/${product._id}`}>{product.name}</Link>
        </Card.Title>

        <StarRating
          starDimension={'20px'}
          rating={product.rating}
          starRatedColor="#cdcd2f"
          numberOfStars={5}
          name="'rating'"
        />

        <br/>

        <div className="text-center mt-5">
          <Button variant="primary">➕ Adicionar Carrinho</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
