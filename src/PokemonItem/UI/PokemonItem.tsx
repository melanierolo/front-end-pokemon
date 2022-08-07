import React from "react";
import {
  Button,
  Card,
  Figure,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import "./PokemonItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface PokemonItem {
  name: string;
  url: string;
}

interface Props {
  pokemon: PokemonItem;
  index: number;
  key: number;
}

const PokemonItem: React.FC = () => {
  //onsole.log(record)

  return (
    <Card className="p-2 mx-2 my-2 m-lg-2 card poke-item" border="info">
      <Row className="mt-2">
        <Col sm={8}></Col>
        <Col sm={4}>
          <OverlayTrigger
            overlay={<Tooltip>Elimina al pokémon de la lista</Tooltip>}
          >
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
      <Figure className="text-center m-0">
        <Figure.Image
          className="pokecard-img"
          alt="imagen pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`}
        />
      </Figure>
      <Card.Body className="text-center m-0 py-0">
        <Card.Title className="text-warning">Pokemon #1</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PokemonItem;
