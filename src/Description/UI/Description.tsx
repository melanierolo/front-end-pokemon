import React from "react";
import { useSelector } from "react-redux";
import { showPokemonSelector } from "../../Pokemons/Structure/Pokemons.reducer";
import PokemonInfo from "../../PokemonInfo/UI/PokemonInfo";

const Description: React.FunctionComponent = () => {
  const pokemonData = useSelector(showPokemonSelector);

  return (
    <div>
      <PokemonInfo data={pokemonData} />
    </div>
  );
};

export default Description;
