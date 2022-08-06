import axios from "axios";
import { PokemonListResponse } from "../../interfaces/pokemons.list";
//axios is a library that helps fetch data(easier)
class API {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async get() {
    try {
      const { data } = await axios.get<PokemonListResponse>(this.url);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
}

export default API;
