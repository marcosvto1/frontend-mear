import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import FloatCart from './components/FloatCart';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
   <>
    <Header />
      <main>
        <Container className="my-5" >
 
           <HomeScreen />
           <FloatCart />
  
        </Container>
      </main>
    <Footer />
   </>
  );
}

export default App;
