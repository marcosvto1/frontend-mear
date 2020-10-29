import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Button, Row, Col, Tabs, Tab, Container } from "react-bootstrap";
import "./style.css";
import StarRating from "react-star-ratings";

import products from "../../products";

export const ProdutoScreen = () => {
  let { id } = useParams();
  const [produto, setProduto] = useState({});
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const productSearch = products.filter((p) => p._id === id);
    console.log(productSearch[0]);
    setProduto(productSearch[0]);
  }, []);

  return (
    <>
      <Row>
        <Col md={12} className="mb-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">

                {produto.category}
              </li>
            </ol>
          </nav>
        </Col>
        <Col>
          <img src={"/images/camera.jpg"} height="80%"></img>
        </Col>
        <Col>
          <div className="_detail-product text-center p-2 mt-2">
            <h2>{produto.name}</h2>
          </div>

          <div>
            <p class="text-muted mt-2" style={{ fontWeight: 'bold' }}>Descrição do produto: <br/><br/> {produto.description}</p>
            <h3>R$ {produto.price}</h3>
            <div className="text-center mt-5">
              <Button variant="primary disabled">➕ Adicionar Carrinho</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Informação Tecnica">
              <p className="p-2">
                Descrição Geral:
                lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </Tab>
            <Tab eventKey="profile" title="Avaliações">
              <Container>
                <Row>
                  <Col md={6} className="p-2">
                    <div className="form-group">
                      <label>Seu Nome</label>
                      <input type={"text"} className="form-control" />
                    </div>

                    <div className="form-group">
                      <StarRating
                        changeRating={(value) => setRating(value)}
                        rating={rating}
                        starRatedColor="#cdcd2f"
                      />
                    </div>
                    <div className="form-group">
                      <label>Sua Opinião</label>
                      <textarea className="form-control"></textarea>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary mt-2">Enviar</button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <ul className="list-group list-group-flush">
                      {produto.reviews &&
                        produto.reviews.map((item) => {
                          return (
                            <li className="list-group-item ">
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    fontSize: "1.6em",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {item.name}
                                </div>
                                <StarRating
                                  rating={item.rating}
                                  starDimension={'20px'}
                                  starRatedColor="#cdcd2f"
                                />
                              </div>
                              <p className="p-1">{item.opinion}</p>
                            </li>
                          );
                        })}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default ProdutoScreen;
