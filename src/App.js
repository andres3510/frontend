import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Badge from 'react-bootstrap/esm/Badge';
import {useContext} from 'react';
import {Store} from './Store';
import Nav from 'react-bootstrap/Nav';

function App() {
  const{state} = useContext(Store);
  const{cart} = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Tienda virtual MinTIC</Navbar.Brand>
              </LinkContainer>
              <Nav ClassName="me-auto">
                <Link to ="/cart" className="nav-link">
                  Carrito de compras
                  {cart.cartItems.length > 0 && (
                    <Badge pill bd="danger">
                    {cart.cartItems.length}
                    </Badge>
                    )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt=3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">Todos los derechos reservados Luis Rios</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
