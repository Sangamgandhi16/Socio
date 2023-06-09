import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="site-container">
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Socio</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>

        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All Rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
