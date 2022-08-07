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
import "./PokemonCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export interface IAplicationProps {}

const PokemonCard: React.FunctionComponent<IAplicationProps> = (props) => {
  return (
    <Card
      className="m-3 card poke-card"
      border="danger"
      style={{ width: "15rem" }}
    >
      <Row className="mt-2">
        <Col sm={8}></Col>
        <Col sm={4}>
          <Button variant="warning ">
            <OverlayTrigger overlay={<Tooltip>Catch a pokémon!</Tooltip>}>
              <FontAwesomeIcon icon={faPlus} />
            </OverlayTrigger>
          </Button>
        </Col>
      </Row>
      <Figure className="text-center m-0">
        <Figure.Image
          width={151}
          height={160}
          alt="iamgen pokemon-151x160"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        />
      </Figure>
      <Card.Body className="text-center m-0 py-0">
        <Card.Title>Pokemon Name</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
