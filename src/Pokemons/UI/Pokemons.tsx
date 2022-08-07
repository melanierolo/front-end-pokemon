import React, { useEffect } from "react";
import { getPokemons } from "../Structure/Pokemons.service";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import logo from "../../assets/logos/pokemon-23.svg";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementplustwo,
} from "../Structure/Pokemons.reducer";
import PokemonCard from "../../PokemonCard/UI/PokemonCard";
import { Col } from "react-bootstrap";

const Pokemons: React.FC = () => {
  useEffect(() => {
    getPokemons();
    console.log("useEffect", getPokemons());
  }, []);
  const onClick2 = () => {
    console.log("data", getPokemons());
  };

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.pokemons.value);
  const dispatch = useAppDispatch();

  return (
    <Col sm={8}>
      <img alt="logo" src={logo} width="500" />
      <h1>Hello World</h1>
      <button onClick={onClick2}>Click me</button>
      <section>
        <h2>Counter:</h2>
        <span>
          <b>Count is:</b>
          {count}
        </span>
        <br />
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-outline-primary mt-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-outline-primary mt-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(incrementplustwo())}
          className="btn btn-outline-primary mt-2"
        >
          +2
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="btn btn-outline-primary mt-2"
        >
          +5
        </button>
      </section>

      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Col>
  );
};

export default Pokemons;
