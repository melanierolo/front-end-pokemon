import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../Redux/store";

// Define a type for the slice state}

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonsState {
  list: Array<Pokemon>;
  selected: null;
  count: number;
  next: any;
  previous: any;
}

// Define the initial state using that type
const initialState: PokemonsState = {
  list: [],
  selected: null,
  count: 0,
  next: null,
  previous: null,
};

export const slice = createSlice({
  name: "pokemons",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPokemons: (state, { payload: list }) => {
      return {
        ...state,
        list,
      };
    },
    countPokemons: (state, { payload: count }) => {
      return {
        ...state,
        count,
      };
    },
    nextPokemons: (state, { payload: next }) => {
      return {
        ...state,
        next,
      };
    },
    previousPokemons: (state, { payload: previous }) => {
      return {
        ...state,
        previous,
      };
    },
    selectPokemon: (state, { payload: selected }) => {
      return {
        ...state,
        selected,
      };
    },
  },
});

export const {
  setPokemons,
  selectPokemon,
  countPokemons,
  nextPokemons,
  previousPokemons,
} = slice.actions;

export default slice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const getPokemonsSelector = (store: RootState) => store.pokemons.list;
export const getPokemonsCountSelector = (store: RootState) =>
  store.pokemons.count;
export const getPokemonsNextSelector = (store: RootState) =>
  store.pokemons.next;
export const getPokemonsPreviousSelector = (store: RootState) =>
  store.pokemons.previous;
export const getSelectedPokemonSelector = (store: RootState) =>
  store.pokemons.selected;
