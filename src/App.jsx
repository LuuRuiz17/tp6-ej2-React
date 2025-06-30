import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Saludo from "./components/Saludo";
import 'animate.css';
import { useState } from 'react';

function App() {
  const [saludar, setSaludar] = useState("My Friend");
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Saludo saludar = {saludar}></Saludo>
    </Container>
  )
}

export default App
