export interface pokemonListResponse {
  next: string;
  previous?: string;
  results?: singlePokemon[];
}

export interface singlePokemon {
  name: string;
  id: string;
}
