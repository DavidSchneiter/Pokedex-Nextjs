import { pokeApi } from "../api";

export const getPokemon = async (name) => {
  const { data } = await pokeApi.get(`/pokedex/${name}`);
  const pokemon = data.pokemon_entries;
  return {
    name: pokemon.name,
  };
};
