import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../../products';
import Product from '../../components/Product';


export const HomeScreen = () => {
  return (
    <div>
      <h1>Últimos Lançamentos</h1>
      <Row className="d-flex justify-content-center">
        { products.map((product) => {
          return <div className="my-3 p-2">
              <Product product={product}/>
          </div>
        } ) }
      </Row>
    </div>
  );
}

export default HomeScreen;