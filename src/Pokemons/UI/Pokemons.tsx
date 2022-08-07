import React, { useEffect } from "react";
import { getPokemons } from "../Application/Pokemons.business";
import { useAppSelector } from "../../app/hooks";
import { getPokemonsSelector } from "../Structure/Pokemons.reducer";
import logo from "../../assets/logos/pokemon-23.svg";
import { Col, Container, Figure, Row } from "react-bootstrap";
import PokemonCard from "../../PokemonCard/UI/PokemonCard";

const Pokemons: React.FC = () => {
  const pokemons = useAppSelector(getPokemonsSelector);

  useEffect(() => {
    getPokemons();
    console.log(getPokemons);
  }, []);

  return (
    <Col sm={8}>
      <section className="text-center">
        <Figure className="text-center mt-4">
          <Figure.Image
            className="pokemon__logo"
            width={400}
            alt="pokemon logo"
            src={logo}
          />
        </Figure>
      </section>

      <section>
        <Row className="row my-4 justify-content-center gap-md-2  gap-xl-0  ">
          {pokemons.map((pokemon, index) => (
            <Col className="py-2" xs={7} sm={7} md={5} xl={4} xxl={3}>
              <PokemonCard pokemon={pokemon} index={index + 1} key={index} />
            </Col>
          ))}
        </Row>
      </section>
    </Col>
  );
};

export default Pokemons;
