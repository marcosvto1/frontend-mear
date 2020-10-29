import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../../products';
import Product from '../../components/Product';


export const HomeScreen = () => {
  return (
    <>
      <h1>Últimos Lançamentos</h1>
      <Row>
        { products.map((product, indexForKey) => {
          return <Col md={4} sm={12} xs={12} className="mb-2">
              <Product key={indexForKey} product={product}/>
          </Col>
        } ) }
      </Row>
    </>
  );
}

export default HomeScreen;