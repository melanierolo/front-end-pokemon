import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../Redux/store";

// Define a type for the slice state
interface CounterState {
  value: number;
  page: number;
  pokemons: object;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 10,
  pokemons: [],
  page: 0,
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log(action);
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementplustwo: (state) => {
      state.value += 2;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementplustwo,
  incrementByAmount,
  setPokemons,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (store: RootState) => store.pokemons.value;
