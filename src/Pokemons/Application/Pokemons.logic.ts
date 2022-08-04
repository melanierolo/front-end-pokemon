import { getPokemonsRepository } from "../Structure/Pokemons.repository";

export async function getPokemonsLogic(params?: any) {
  return getPokemonsRepository(params);
}
