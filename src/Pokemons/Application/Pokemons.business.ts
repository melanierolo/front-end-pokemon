import { getPokemonLogic, getPokemonsLogic } from "./Pokemons.logic";
import {
  saveListPokemons,
  saveSelectedPokemon,
} from "../Structure/Pokemons.store";

export async function getPokemons(params?: any) {
  const data = await getPokemonsLogic(params);
  saveListPokemons(data?.data?.results);
}

export async function getPokemon(id: number) {
  const pokemon = await getPokemonLogic(id);
  saveSelectedPokemon(pokemon);
}

export default getPokemons;
