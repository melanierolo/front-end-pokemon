import React from "react";
import { getPokemons } from "../Application/Pokemons.business";

const Pokemons = () => {
  const onClick2 = () => {
    console.log("data-click", getPokemons());
  };

  return (
    <div>
      <button onClick={onClick2}>Click me</button>
    </div>
  );
};

export default Pokemons;
