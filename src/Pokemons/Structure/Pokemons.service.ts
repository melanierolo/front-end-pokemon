import API from "../../Data/Domain/API";
import URL from "../../Data/Domain/URL";

export async function getPokemons(params?: any) {
  const dataPokemons = await new API(
    URL.setParams(URL.buildUrl("pokemon"), params)
  ).get();
  return dataPokemons && console.log("data-business:", dataPokemons);
}

export async function getPokemon(id: number) {
  return await new API(URL.setId(URL.buildUrl("pokemon"), id)).get();
}
