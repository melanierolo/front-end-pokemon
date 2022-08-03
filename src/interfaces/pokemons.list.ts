export interface pokemonListResponse {
  count: number;
  next: string;
  previous?: string;
  results?: SinglePokemon[];
}

export interface SinglePokemon {
  name: string;
  url: string;
  id: string;
  img: string;
}
