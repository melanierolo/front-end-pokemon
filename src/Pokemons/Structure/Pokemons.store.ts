import store from "../../Redux/store";
import {
  setPokemons,
  countPokemons,
  nextPokemons,
  previousPokemons,
  selectPokemon,
} from "./Pokemons.reducer";

export function saveListPokemons(records?: any) {
  store.dispatch(setPokemons(records));
}

export function saveCountPokemons(count: number) {
  store.dispatch(countPokemons(count));
}

export function saveNextPokemons(count: number) {
  store.dispatch(nextPokemons(count));
}

export function savePreviousPokemons(count: number) {
  store.dispatch(previousPokemons(count));
}

export function saveSelectedPokemon(pokemon?: any) {
  store.dispatch(selectPokemon(pokemon));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
