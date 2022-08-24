import { pokeApi } from "../api";

export const getPokemon = async (name) => {
  const { data } = await pokeApi.get(`/pokemon/${name}`);

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    sprites: data.sprites,
    types: data.types.map(({ type }) => {
      return type.name;
    }) /*[data.types[0].type.name, data.types[1].type.name]*/,
  };
};
