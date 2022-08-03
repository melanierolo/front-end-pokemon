import React from "react";
import logo from "./assets/logos/pokemon-23.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Pokemons from "./Pokemons/UI/Pokemons";

function App(): JSX.Element {
  return (
    <Router>
      <Container>
        <>
          <img alt="logo" src={logo} width="500" />
          <h1>Hello World</h1>
          <Pokemons />
        </>
      </Container>
    </Router>
  );
}

export default App;
