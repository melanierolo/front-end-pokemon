import { configureStore } from "@reduxjs/toolkit";
import pokemosReducer from "./Pokemons.reducer";

export const store = configureStore({
  reducer: {
    pokemons: pokemosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
