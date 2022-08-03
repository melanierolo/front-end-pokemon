import { getPokemonsLogic } from "./Pokemons.logic";

export async function getPokemons(params?: any) {
  const data = await getPokemonsLogic();
  return data && console.log("data-business:", data);
}
