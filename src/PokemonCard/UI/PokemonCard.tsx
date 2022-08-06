import React from "react";
import { Button, Card, Figure } from "react-bootstrap";
import "./PokemonCard.css";

export interface IAplicationProps {}

const PokemonCard: React.FunctionComponent<IAplicationProps> = (props) => {
  return (
    <Card
      className="m-3 card poke-card"
      border="danger"
      style={{ width: "18rem" }}
    >
      <Figure className="text-center mt-4">
        <Figure.Image
          width={191}
          height={200}
          alt="191x200"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        />
      </Figure>
      <Card.Body className="text-center">
        <Card.Title>Pokemon Name</Card.Title>
        <Button variant="warning" size="lg">
          Catch a pokemon!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
