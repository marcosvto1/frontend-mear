import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatCart from "./components/FloatCart";
import HomeScreen from "./screens/HomeScreen";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container className="mt-5">
          <Routes />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
