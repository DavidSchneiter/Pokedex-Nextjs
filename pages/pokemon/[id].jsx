import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import React from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { getPokemon } from "../../helpers";

export default function Pokemon({ pokemon }) {
  const tipo = (type) => {
    switch (type) {
      case 'ground':
        return "type ground"
      case 'grass':
        return "type grass"
      case 'normal':
        return "type normal"
      case'fire':
        return "type fire"
      case 'water':
        return "type water"
      case'electric':
        return "type electric"
      case 'ice':
        return "type ice"
      case'flying':
        return "type flying"
      case 'ghost':
        return "type ghost"
      case'rock':
        return "type rock"
      case 'fighting':
        return "type fighting"
      case'poison':
        return "type poison"
      break
      case'psychic':
        return "type psychic"
      case'dark':
        return "type dark"
      case'bug':
        return "type bug"
      case'steel':
        return "type steel"
      case'dragon':
        return "type dragon"
    
      default:
        break;
    }
    
  }
  return (
    <Layout >
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
              <Grid xs={ 12 } sm={ 4 } >
                <Card isHoverable css={{ padding: '30px' }}>
                    <Card.Body>
                      <Card.Image 
                        src={ pokemon.sprites.other?.dream_world.front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` || '/no-image.png' }
                        alt={ pokemon.name }
                        width="100%"
                        height={ 200 }
                      />
                    </Card.Body>
                </Card>
              </Grid>

              <Grid xs={ 12 } sm={ 8 }>
                <Card>
                  <Card.Header>
                    <Text h1 transform='capitalize'>{ pokemon.name }</Text>
              <Container >
                <Text h2 transform="capitalize" className={tipo(pokemon.types[0])} > {pokemon.types[0] }</Text>
                <Text h2 transform="capitalize" className={tipo(pokemon.types[1])} > {pokemon.types[1] }</Text>

              </Container>
                   
                  </Card.Header>

                  <Card.Body>
                    <Text size={30}>Sprites:</Text>

                    <Container direction='row' display='flex' gap={ 0 }>
                        <Image 
                          src={ pokemon.sprites.front_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.front_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />

                    </Container>


                  </Card.Body>  


                </Card>
              </Grid>

           </Grid.Container>
    </Layout>
  );
}


export async function getStaticPaths() {
  const { data } = await pokeApi.get("/pokemon?limit=898");
  const pokemonNames = data.results.map((pokemon) => pokemon.name);
  // console.log(pokemonNames);
  return {
    // paths: data.results.map((name) => ({
    //   params: { id: name.toString() },
    // })),
    paths: pokemonNames.map( name => ({
      params: { id: name }
    })),
    fallback: false
    // fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  // const { data } = await pokeApi.get("/pokemon?limit=151");
  const pokemon = await getPokemon(params.id);
  // const pokemons = data.results.map((poke) => poke.name);
  // const name = params.id;
  // console.log(pokemon);
  return {
    props: {
      pokemon,
    },
  };
}
