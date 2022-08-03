import { getPokemonsRepository } from "../Infrastructure/Pokemons.repository";

export async function getPokemonsLogic(params?: any) {
  return getPokemonsRepository(params);
}
