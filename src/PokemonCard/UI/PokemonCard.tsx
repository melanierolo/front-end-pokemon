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
import { useSelector } from "react-redux";
import { getSelectedPokemonSelector } from "../../Pokemons/Structure/Pokemons.reducer";

interface PokemonItem {
  name: string;
  url: string;
}

interface Props {
  pokemon: PokemonItem;
  index: number;
  key: number;
}

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon, index } = props;
  const record = useSelector(getSelectedPokemonSelector);

  //onsole.log(record)

  return (
    <Card className="mx-2 m-lg-1 card poke-card h-100" border="danger">
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
      <Figure className="text-center m-0 pokecard-figure ">
        <Figure.Image
          className="pokecard-img"
          alt="iamgen pokemon-151x160"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
        />
      </Figure>
      <Card.Body className="text-center m-0 py-0">
        <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
