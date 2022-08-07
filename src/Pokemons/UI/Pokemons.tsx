import React, { useEffect } from "react";
import { getPokemons } from "../Application/Pokemons.business";
import { useAppSelector } from "../../app/hooks";
import { getPokemonsSelector } from "../Structure/Pokemons.reducer";
import logo from "../../assets/logos/pokemon-23.svg";
import { Col, Figure } from "react-bootstrap";
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
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} index={index + 1} key={index} />
        ))}
      </section>
    </Col>
  );
};

export default Pokemons;
