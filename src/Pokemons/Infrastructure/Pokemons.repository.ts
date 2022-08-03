import { getPokemons } from "./Pokemons.service";

export async function getPokemonsRepository(params?: any) {
  const data = await getPokemons(params);
  return data;
}
